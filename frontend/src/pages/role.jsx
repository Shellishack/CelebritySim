import { NavLink } from 'react-router-dom';
export default function Role(){
    return (
        <div className="role-container">
            <div className="masking-out">
                <h2>选择你的角色</h2>
                <p><a href="">网红</a></p>
                <p className="text-bottom">
                    <a href="">路人</a>
                    <NavLink to="/prompt">经纪人</NavLink>
                </p>
            </div>
        </div>
    )
}