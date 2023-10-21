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
                    <div className="info">
                        <div>
                            <div>
                                <p>心情</p>
                                <div>进度条</div>
                            </div>
                            <div>
                                <p>粉丝量</p>
                                <div>进度条</div>
                            </div>
                        </div>
                        <div className="fan">
                            <div>
                                <p>黑粉</p>
                                <p>路人粉</p>
                                <p>真爱粉</p>
                            </div>
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
            <div className="modal-box" style={{display: 'none'}}>
                window
            </div>
        </>
        // <div style={{backgroundImage: `url(${})`, width: "100vw", height: "100vh"}}>
        //     CelebrityDaily
        // </div>
    )
}