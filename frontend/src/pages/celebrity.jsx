import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Celebrity(){
    const navigate = useNavigate();
    const [imageObj, setImageObj] = useState([]);

    useEffect(() => {
        // fetch()
    })

    const selectedImg = (imgUrl) => {
        navigate(`/celebrity-daily?url=${imgUrl}`)
    }

    return (
        <div className="celebrity-container">
            <div className="masking-out">
                <h1>选择你的养成对象</h1>
                <div className='img-container'>
                    <img src="/bg.png" alt=""  width={300} height={200} onClick={() => selectedImg('/bg.png')}/>
                    <img src="/bg.png" alt=""  width={300} height={200}/>
                    <img src="/bg.png" alt=""  width={300} height={200}/>
                    <img src="/bg.png" alt=""  width={300} height={200}/>
                </div>
            </div>
        </div>
    )
}