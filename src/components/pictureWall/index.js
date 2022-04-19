import {useEffect, useState} from "react";
import p1 from '../../humanPicture/1.jpg'
import p2 from '../../humanPicture/2.jpg'
import p3 from '../../humanPicture/3.jpg'
import p4 from '../../humanPicture/4.jpg'
import p5 from '../../humanPicture/5.jpg'
import p6 from '../../humanPicture/6.jpg'
import './index.css'
const PictureWall = () => {
    const [arr, setArr] = useState([])
    useEffect(() => {
        let arr = [p1, p2, p3, p4, p5, p6]
        setArr(arr)
    }, [])
    return (
        <div className={"home-section block-container"} id={"section4"}>
            {arr.map((e, index) => {
                return (
                    <div className={"home-block"} key={index}>
                        <img className={"home-block-img"} src={e} alt="pic"/>
                    </div>
                )
            })}
        </div>
    )
}
export default PictureWall