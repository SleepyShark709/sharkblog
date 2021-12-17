import TodoItem from "../components/todo/TodoItem";
import {useEffect, useState} from "react";
import axios from "axios";

const TodoList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getAllData()
    }, [])
    const getAllData = () => {
        axios.get('/all').then(res => {
            let d = res.data
            console.log('d is', d)
            setData(d)
        })
    }
    return(
        <div className={"todo-container"}>
            {/*渲染框*/}
            <ul>
                {data.map(t => (
                    <li key={t.id}>
                        {/*实际上对于每一个 Todo, 都通过 TodoItem 来处理*/}
                        <TodoItem onChange={() => {getAllData()}} data={t}/>
                    </li>
                ))}
            </ul>
        </div>
        )
}

export default TodoList