# %% [markdown]
# # 准备阶段
# 提前打开浏览器并加载完所有元素，方便后续的所有上传与测试

# %%
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

def restart(url, service, options):
    driver = webdriver.Chrome(service=service, options=options)

    # 打开网站
    driver.get(url)

    

    # wait = WebDriverWait(driver, 100)  # 最多等待10秒
    # upload_input = wait.until(EC.presence_of_element_located((By.XPATH, '//input[@type="file"]')))

    # # 定位到textarea并输入文本
    # textarea_element = wait.until(EC.presence_of_element_located((By.ID, 'prompt-textarea')))
    # # 定位到发送按钮并点击
    # send_button = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'button[data-testid="send-button"]')))
    return driver

# %% [markdown]
# # 辅助函数

# %%
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import re
import time 
from PIL import Image
import requests
from io import BytesIO
import os

def upload_single_image_and_prompt(driver, img_path, prompt_text):
    upload_image(driver, img_path)
    return send_prompt(driver, prompt_text)


def upload_multiple_images_and_prompt(driver, img_paths, prompt_text, submit_each=False):
    for img_path in img_paths:
        upload_image(driver, img_path)
        if submit_each:
            return send_prompt(driver, '')
    if not submit_each:
        return send_prompt(driver, prompt_text)



def upload_image(driver, img_path):
    upload_input = WebDriverWait(driver, 10000).until(EC.presence_of_element_located((By.XPATH, '//input[@type="file"]')))
    upload_input.send_keys(img_path)
    
    # 等待按钮样式变为"background-color: rgb(171, 104, 255);"
    wait = WebDriverWait(driver, 20000)  # 最多等待20秒
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, 'button[style="background-color: rgb(171, 104, 255);"]')))
    print("upload finished!")


def decode_html_entities(url):
    return url.replace("&amp;", "&")



def send_prompt(driver, prompt_text,dalle=False):
    textarea_element = WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.ID, 'prompt-textarea')))
    textarea_element.send_keys(prompt_text)
    
    send_button = WebDriverWait(driver, 100).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'button[data-testid="send-button"]')))
    send_button.click()
    # 使用显式等待，等待发送按钮恢复到禁用状态
    button_element = WebDriverWait(driver, 600).until(
        EC.element_to_be_clickable((By.XPATH, '//div[contains(@class, "flex w-full gap-2 items-center justify-center") and contains(text(), "Regenerate")]'))
    )
    time.sleep(5)
    if dalle:
        grid_elements = driver.find_elements(By.CSS_SELECTOR, '.grid.gap-4.grid-cols-2')
        if grid_elements:
            # 取最后一个元素的HTML内容
            html_string = grid_elements[-1].get_attribute('outerHTML')
        # 使用正则表达式提取所有src中的链接
        image_links = re.findall(r'src="(https://[^"]+)"', html_string)

        image_links = [
            decode_html_entities(link)
            for link in image_links
        ]

        # 用一个list来存储所有的图片对象
        image_objects = []

        # 遍历链接，并使用PIL从链接下载并存储图片
        for link in image_links:
            response = requests.get(link)
            img = Image.open(BytesIO(response.content))
            image_objects.append(img)

        return image_links

    # 获取指定区域的文本内容
    content_elements = driver.find_elements(By.CSS_SELECTOR, 'div.markdown.prose.w-full.break-words.dark\\:prose-invert.dark')
    if content_elements:
        content_text = content_elements[-1].text
    return content_text


def image_grid(imgs, rows, cols):
    assert len(imgs) == rows * cols

    w, h = imgs[0].size
    grid_w = cols * w + (cols - 1)  # 计算网格宽度，包括图像间隔
    grid_h = rows * h + (rows - 1)  # 计算网格高度，包括图像间隔

    grid = Image.new('RGBA', size=(grid_w, grid_h))
    transparent_pixel = (0, 0, 0, 0)  # 定义透明像素的颜色

    for i, img in enumerate(imgs):
        x = (w + 1) * (i % cols)  # 计算当前图像的x坐标，包括图像间隔
        y = (h + 1) * (i // cols)  # 计算当前图像的y坐标，包括图像间隔

        for dx in range(w):
            for dy in range(h):
                pixel = img.getpixel((dx, dy))
                grid.putpixel((x + dx, y + dy), pixel)  # 将图像像素粘贴到网格中

        # 添加图像间隔列
        if i % cols < cols - 1:
            for dy in range(h):
                grid.putpixel((x + w, y + dy), transparent_pixel)

        # 添加图像间隔行
        if i // cols < rows - 1:
            for dx in range(w):
                grid.putpixel((x + dx, y + h), transparent_pixel)

    return grid


# 如果有使用生成好的pil对象需求
def upload_pil_image(driver, pil_img, prompt_text, multiple=False):
    if multiple:
        # 此时pil_img是一个list，将其转换为一行或者一列的网格
        n = len(pil_img)
        grid = image_grid(pil_img, 1, n)
        # grid = image_grid(pil_img, n, 1)
        pil_img = grid
    temp_file_path = "temp_img.png"
    pil_img.save(temp_file_path)
    if os.path.exists(temp_file_path):
        absolute_path = os.path.abspath(temp_file_path)
        context =  upload_single_image_and_prompt(driver, absolute_path, prompt_text)
    os.remove(absolute_path)
    return context

# %% [markdown]
# # DALL·E 3
# 利用类似的思路，我们可以实现DALL·E 3的功能，即输入一段文本，生成一张图片。


# 使用自己的用户数据来解决验证问题；注意，必须关掉所有的chrome窗口，否则会报错
# 修改User为自己的用户名
# The prompt here must not contain any non-BMP characters. 
# It should also not contain any newline characters.
def create_images(prompt):
    chrome_user_data_path = os.environ.get("CHROME_USER_DATA_PATH")

    options = webdriver.ChromeOptions()
    options.add_argument(f"user-data-dir={chrome_user_data_path}")

    # 设置chromedriver的路径
    driver_path = os.environ.get("CHROME_DRIVER_PATH")
    s = Service(driver_path)

    # %%
    driver = restart("https://chat.openai.com/?model=gpt-4-dalle", s, options)
    time.sleep(3)
    image_list = send_prompt(driver, prompt, dalle=True)
    # upload_pil_image(driver, image_list[0], "生成评论", multiple=False)
    return image_list

if __name__ == "__main__":
    a = "a tree"
    create_images(f"""Create images for: ```{a}```""")