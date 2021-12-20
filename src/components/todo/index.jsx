import {Input, Button, message, Spin} from 'antd'
import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";
import 'antd/dist/antd.css'
import './index.css'
import axios from "axios";
axios.defaults.baseURL = 'http://49.232.151.150:8000/api/todo'

const Todo = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [detail, setDetail] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getAllData()
    }, [])

    const getAllData = () => {
        setLoading(true)
        axios.get('/all').then(res => {
            let d = res.data
            console.log('d is', d)
            setData(d)
            setLoading(false)
        })
    }

    const onSubmit = () => {
        let o = {
            date,
            title,
            detail
        }
        console.log(o)
        axios.post('/add', o).then(res => {
            message.success('爱情信息已记录')
            getAllData()
            console.log('res is', res)
        })
    }

    const timeOnchange = (e) => {
        let v = e.target.value
        setDate(v)
    }

    const titleOnchange = (e) => {
        let v = e.target.value
        setTitle(v)
    }

    const detailOnchange = (e) => {
        let v = e.target.value
        setDetail(v)
    }


    return (
        <div className={"todo-container"}>
            {isLoading ? <div className={"todo-loading-container"}>
                <Spin size={"large"}/>
            </div> : null}
            {/*渲染框*/}
            <ul>
                {(data.length > 5 ? data.slice(0, 5) : data).map(t => (
                    <li key={t.id}>
                        {/*实际上对于每一个 Todo, 都通过 TodoItem 来处理*/}
                        <TodoItem onChange={() => {getAllData()}} data={t}/>
                    </li>
                ))}
                {data.length > 5 ? <div>...</div> : null}

            </ul>
            {/*输入框*/}
            <div className={"todo-input-container"}>
                <div className={"todo-input-item"} style={{width: '20%'}}>
                    <span>时间/日期：</span>
                    <Input onChange={timeOnchange} />
                </div>
                <div className={"todo-input-item"} style={{width: '30%'}}>
                    <span>标题：</span>
                    <Input onChange={titleOnchange} />
                </div>
                <div className={"todo-input-item"} style={{width: '40%'}}>
                    <span>详情：</span>
                    <Input onChange={detailOnchange} />
                </div>
                <div className={"todo-input-button-container"}>
                    <Button type="primary" onClick={onSubmit}>提交</Button>
                </div>
            </div>
        </div>
    )
}

export default Todo