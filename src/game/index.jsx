import './index.css'
import CDR from './吃豆人.png'
import Dou from './豆.png'
import {useState, useEffect} from "react";

const Game = () => {
    const [left, setLeft] = useState(5)
    const [food, setFood] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    useEffect(() => {
        let l = left
        let f = food
        console.log('123')
        f = f.slice(0, f.length - 1)
        l += 10
        if (l > 95) {
            l = 5
            f = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
        setTimeout(() => {
            setLeft(l)
            setFood(f)
        }, 1000)
    }, [left, food])

    return(
        <div className={"game-container"}>
            <img className={"game-body"} style={{left: `${left}%`}} src={CDR} alt=""/>
            {food.map((e, index) => {
                    return <img src={Dou} style={{right: `${2.8 + 10 * index}%`}} key={index} className={"game-circle"} alt={'dou'}/>
            })}
            <div>
            </div>
        </div>
    )
}

export default Game