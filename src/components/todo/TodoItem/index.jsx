import {useEffect, useState } from "react";
import {Button, Input,Popconfirm} from "antd";
import './index.css'
import axios from "axios";

const TodoItem = (props) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [detail, setDetail] = useState('')
    const [editState, setEditState] = useState(false)

    useEffect(() => {
        let data = props.data
        let {date, detail, title} = data
        setDate(date)
        setDetail(detail)
        setTitle(title)
    }, [props])

    const onDelete = () => {
        let id = props.data.id
        axios.get(`/delete/${id}`).then(res => {
            console.log('res is', res)
        })
        if (props.onChange) {
            props.onChange()
        }
    }
    const onEdit = () => {
        setEditState(true)
    }

    const onEditDone = () => {
        let o = {
            date,
            title,
            detail
        }
        axios.post(`/update/${props.data.id}`, o).then(res => {
            setEditState(false)
            if (props.onChange) {
                props.onChange()
            }
        })
    }

    const editList = (
        <div className={"todo-item-content-container"}>
            <div className={"todo-input-item"} style={{width: '20%'}}>
                <span>时间日期：</span>
                <Input defaultValue={date} onChange={(e) => {setDate(e.target.value)}} />
            </div>
            <div className={"todo-input-item"} style={{width: '30%'}}>
                <span>标题：</span>
                <Input defaultValue={title} onChange={(e) => {setTitle(e.target.value)}} />
            </div>
            <div className={"todo-input-item"} style={{width: '40%'}}>
                <span>详情：</span>
                <Input defaultValue={detail} onChange={(e) => {setDetail(e.target.value)}} />
            </div>
        </div>
    )

    const normalList = (
        <div className={"todo-item-content-container"}>
            <div className={"todo-input-item"}>
                <span>时间日期：</span>
                <div>{date}</div>
            </div>
            <div className={"todo-input-item"}>
                <span>标题：</span>
                <div>{title}</div>
            </div>
            <div className={"todo-input-item"}>
                <span>详情：</span>
                <div>{detail}</div>
            </div>
        </div>
    )

    const norMalButton = (
        <div className={"todo-item-buttons"}>
            <Button className={"todo-item-button"} type="primary" onClick={onEdit}>编辑</Button>
            <Popconfirm placement="topLeft" title={"你确定要删除这条数据么"} onConfirm={onDelete} okText="确定" cancelText="取消">
                <Button className={"todo-item-button"} danger>删除</Button>
            </Popconfirm>

        </div>
    )

    const editButton = (
        <div className={"todo-item-buttons"}>
            <Button className={"todo-item-button"} onClick={() => {setEditState(false)}}>取消</Button>
            <Button className={"todo-item-button"} type="primary" onClick={onEditDone}>完成</Button>
        </div>
    )

    return(
        <div>
            <div className={"todo-item-container"}>
                {editState === true ? editList : normalList}
                {/*<div className={"todo-item-content-container"}>*/}
                {/*    <div>*/}
                {/*        <span>时间日期：</span>*/}
                {/*        <div>{date}</div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span>标题：</span>*/}
                {/*        <div>{title}</div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span>详情：</span>*/}
                {/*        <div>{detail}</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {
                    editState === true ? editButton : norMalButton
                }
                {/*<div className={"todo-item-buttons"}>*/}
                {/*    <Button className={"todo-item-button"}>编辑</Button>*/}
                {/*    <Button className={"todo-item-button"} onClick={onDelete} danger>删除</Button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default TodoItem