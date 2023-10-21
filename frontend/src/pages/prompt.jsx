import { NavLink } from "react-router-dom";

export default function Prompt() {
    return (
        <div className="prompt-container">
            <div className="prompt-text">
                <p>
                你是一名网红经纪人，你的目标是培养百万粉网红，寻找符合你认为最有潜力成为网红的人吧！（输入详细的外在描述及性格特征打造专属网红，示例：超天将是一个白色短发猫耳的少女，她有一双橙色瞳孔的大眼睛，身材娇小，身着和服。她是ENFJ人。）
                <NavLink to="/celebrity">celebrity</NavLink>
                </p><br />
                <div className="prompt-input">
                    <input type="text" />
                    <button>开始寻找</button>
                </div>
            </div>
        </div>
    )
}