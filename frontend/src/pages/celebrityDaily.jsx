import { useSearchParams, useRef } from "react-router-dom";

export default function CelebrityDaily(){
    let [searchParams, setSearchParams] = useSearchParams()

    const getData = async () => {
        // console.log(111);
        // var response = await fetch("/api/test");
        // var json = response.text();
        // console.log(json);
        fetch("/api/test").then(function(response) {

            return response.json();
          
          }).then(function(data) {
          
            console.log(data);
          
          }).catch(function(e) {
          
            console.log("Oops, error");
          
          });
         
    }


    return (
        <>
            <div className="celebrity-daily-container">
                <div>
                    <img src={searchParams.get('url')} alt="" />
                    <div className="celebrity-daily-input-container">
                        <ul>
                            <li className="human">
                                <i></i>
                                <span>当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒</span>
                            </li>
                            <li className="assistant">
                                <i></i>
                                <span>当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒</span>
                            </li>
                            <li className="assistant">
                                <i></i>
                                <span>当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒</span>
                            </li>
                            <li className="assistant">
                                <i></i>
                                <span>当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒</span>
                            </li>
                            <li className="human">
                                <i></i>
                                <span>当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒, 当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒,当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒,当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒</span>
                            </li>
                            <li className="assistant">
                                <i></i>
                                <span>当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒</span>
                            </li>
                            <li className="human">
                                <i></i>
                                <span>当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒, 当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒,当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒,当升科技付款啦数据开发金卡手机撒可富就开了刷卡荆防颗粒</span>
                            </li>
                        </ul>
                        <div className="celebrity-daily-chat">
                            <input type="text" /> 
                            <button onClick={getData}>Send</button>
                        </div>
                    </div> 
                </div>
                <div className="celebrity-info">
                    
                <div class="info">
                <div class="info">
    <div class="mood">
        <p>心情</p>
        <div class="heart"></div>
    </div>
    <div class="fans">
        <p>粉丝量</p>
        <p style={{color: "#FFB6C1", fontWeight: "bold", fontFamily: 'Brush Script MT', cursive:true}}>25000</p>
    </div>
</div>

    <div class="progressbar">
    <div class="heifen"><p style={{color: "white"}}>黑粉</p></div>
    <div class="lufen"><p style={{color: "black"}}>路人粉</p></div>
    <div class="zhenai"><p style={{color: "red"}}>真爱粉</p></div>
</div>
</div>


                    <div>
                        <h3>日报</h3>
                        <ul>
                            <li>
                                <i>第14天</i>
                                <span>上岛咖啡就开始垃圾费科技大山卡拉飞机扣京东数科垃圾分类快进到索拉卡腹肌看老大洒基风口浪尖圣诞快乐复健科拉萨登记啊付款了第三节课发了尽快老司机了</span>
                                <img src="/bg.png" alt="" style={{width: '100px'}}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

{/* 
            <div className="modal-box">
    <div className="modal-box-header">
        <p>X</p>
    </div>
    <div className="model-box-body">
        <div className="iphone-box">
            <div class="iphone">
                <div class="status-bar">
                    <div class="status-left">
                        <div class="status-dot"></div>
                        10:30 AM
                    </div>
                    <div class="wifi-bars">
                        <div class="wifi-bar"></div>
                        <div class="wifi-bar"></div>
                        <div class="wifi-bar"></div>
                        <div class="wifi-bar"></div>
                    </div>
                </div>
                <div class="ins-image">
                    <div class="ins-image-dots">
                        <div class="ins-image-dot"></div>
                        <div class="ins-image-dot"></div>
                        <div class="ins-image-dot"></div>
                        <div class="ins-image-dot"></div>
                    </div>
                </div>
                <div class="ins-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                    Donec scelerisque sollicitudin enim eu venenatis.
                </div>
            </div>
        </div>
        <div className="body-text">
            <p>粉丝A：我晕 不是我说姐妹你好好看！</p>
            <p>粉丝B：。。。</p>
            <p>粉丝C：好漂亮呀！！</p>
            <div>
                日报：今天超天酱出外景拍了一组胶片写真，发了美美的照片，蹭蹭涨粉10000。心情+
            </div>
        </div>
    </div>
</div> */}


        </>
        // <div style={{backgroundImage: `url(${})`, width: "100vw", height: "100vh"}}>
        //     CelebrityDaily
        // </div>
    )
}