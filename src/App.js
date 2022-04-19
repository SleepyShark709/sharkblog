import React, {Component} from 'react'
// import a as b from module 相当于给 a 模块起了一个别名 b,
// 这样在其他地方使用可以直接使用 b 这个变量名
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import Home from "./home";
import MobileHome from './mobile/home'
import TodoList from './todoList';
import axios from "axios";


const App = () => {
    console.log('当前的环境', process.env.NODE_ENV)
    axios.defaults.baseURL = 'http://localhost:8000/api/todo'
    if (process.env.NODE_ENV === 'production') {
        axios.defaults.baseURL = 'http://49.232.151.150:8000/api/todo'
    }
    let routes = useRoutes([
        {
            path: "/", element: <Home/>
        },
        {
            path: "/mobileHome", element: <MobileHome/>

        },
        {
            path: "/todolist", element: <TodoList/>
        },
    ])
    return routes
}

const AppWrapper = () => {
    return(
        <Router>
            <App/>
        </Router>
    )
}

export default AppWrapper
