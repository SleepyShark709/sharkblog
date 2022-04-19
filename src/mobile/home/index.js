import {useEffect, useState} from "react";
import TodoItem from "../../components/todo/TodoItem";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/all').then(res => {
            let d = res.data
            setData(d)
            console.log('data is', d)
            // setLoading(false)
        })
    }, [])
    return (
        <div>
            {/*渲染框*/}
            <ul>
                {/*{(data.length > 5 ? data.slice(0, 5) : data).map(t => (*/}
                {/*    <li key={t.id}>*/}
                {/*        /!*实际上对于每一个 Todo, 都通过 TodoItem 来处理*!/*/}
                {/*        /!*<TodoItem onChange={() => {getAllData()}} data={t}/>*!/*/}
                {/*        {t}*/}
                {/*    </li>*/}
                {/*))}*/}
                {/*{data.length > 5 ? <div>...</div> : null}*/}

            </ul>
        </div>
    )
}

export default Home