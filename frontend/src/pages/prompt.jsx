import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Prompt() {
    const navigate = useNavigate();
    const [imgs, setImgs] = useState([]);
    const inputRef = useRef('');



    const onKeyDown = (e) => {
        switch (e.keyCode) {
            case 13:
                clickHandle()
            break
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown) // 添加全局事件
        return () => {
            window.removeEventListener('keydown', onKeyDown) // 销毁
        }
    },[])

    const clickHandle = async () => {

        //setImgs([{src: '/bg.png', index: 0}, {src: '/star.png', index: 1}, {src: '/bg.png', index: 2}, {src: '/bg.png', index: 3}]);


        var response;
        try {
            response = await fetch('/api/', {
                method: 'post',
                body: JSON.stringify({}),
                headers: {
                'Content-Type': 'application/json'
                }
            });
            var data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const selectedImg = (imgUrl) => {
        console.log(1111);
        navigate(`/celebrity-daily?url=${imgUrl}`)
    }

    return (
        <div className="prompt-container">
            <h1>选择你的养成对象</h1>
            <div className='img-container'>
                {
                    imgs.length && imgs.map(img => {
                        return <img src={img.src} alt="" key={img.index} width={300} height={200} onClick={() => {selectedImg(img.src)}}/>
                    })
                }
            </div>
            <div className="prompt-text">
                <p>
                你是一名网红经纪人，你的目标是培养百万粉网红，寻找符合你认为最有潜力成为网红的人吧！（输入详细的外在描述及性格特征打造专属网红，示例：超天将是一个白色短发猫耳的少女，她有一双橙色瞳孔的大眼睛，身材娇小，身着和服。她是ENFJ人。）
                <NavLink to="/celebrity">celebrity</NavLink>
                </p><br />
                <div className="prompt-input">
                    <input type="text" ref={inputRef}/>
                    <button onClick={clickHandle}>开始寻找</button>
                </div>
            </div>
        </div>
    )
}