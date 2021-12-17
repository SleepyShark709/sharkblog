import React, {Component} from 'react'
// import a as b from module 相当于给 a 模块起了一个别名 b,
// 这样在其他地方使用可以直接使用 b 这个变量名
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import Home from "./home";
import TodoList from './todoList';

const App = () => {
    let routes = useRoutes([
        {
            path: "/", element: <Home/>
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
