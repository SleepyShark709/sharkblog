import './index.css'
import PictureWall from "../components/pictureWall";
import Todo from '../components/todo/index'
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    console.log('当前的环境', process.env.NODE_ENV)
    let navigate = useNavigate();
    const os = function () {
        let ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
        };
    }

    useEffect(() => {
        let { isPc } = os()
        if (!isPc) {
            navigate("/mobilehome");
        }
    }, [])
    return(
        <div style={{backgroundColor: '#ffffff'}}>
            <div className={"navigator-bar"}>
                <div className={"navigator-bar-buttons"}>
                    <a className={"navigator-bar-a logo-a"} href="#首页"/>
                    <a className={"navigator-bar-a"} href="#大事件">大事件记录</a>
                    <a className={"navigator-bar-a"} href="#游戏">游戏</a>
                    <a className={"navigator-bar-a"} href="#section3">about</a>
                    <a className={"navigator-bar-a"} href="#照片墙">照片墙</a>
                </div>
            </div>
            <div className={"home-header"} id={"首页"}>
                <div className="home-style-banner">
                    <h2 className={"section-title"} style={{color: "#fff"}}>圣诞快乐</h2>
                    <h3 className={"section-small-title"} style={{color: "#fff"}}>Wishing You A Happy Christmas</h3>
                </div>
            </div>
            <div id="大事件" className={"home-about home-section"} style={{backgroundColor: 'rgb(234,242,252)'}}>
                <div className="home-style-banner" style={{paddingTop: '3rem'}}>
                    <h2 className={"section-title"} style={{color: "#333"}}>大事件记录</h2>
                    <h3 className={"section-small-title"} style={{color: "#333"}}>有你在，每一件小事都是生命中的大事</h3>
                    <div className={"section-detail"}><a href="todolist" className={"section-detail-a"}>查看全部详情</a></div>
                </div>
                <Todo />
            </div>
            <div className={"home-section"} id={"游戏"} style={{backgroundColor: "rgb(246 246 249)", height: '730px'}}>
                <div className="home-style-banner" style={{paddingTop: '3rem'}}>
                    <h2 className={"section-title"} style={{color: "#333"}}>吃豆人游戏</h2>
                    <h3 className={"section-small-title"} style={{color: "#333"}}>吃掉那些豆子，试着去完成关卡</h3>
                </div>
                <div className={"frame-container"} >
                    <iframe className={"section-frame"} src="http://49.232.151.150:8080/" frameBorder="0"></iframe>

                </div>
            </div>
            <div className={"home-section"} id={"section3"} style={{backgroundColor: "rgb(53,40,60)"}}></div>
            <div id="照片墙">
                <PictureWall />
            </div>
            <div className={"home-footer"}>
                <div className={"home-footer-container"}>
                    <div className={"law"} style={{marginTop: '20px'}}>All content copyright  一条鲨鱼 © 2021 • All rights reserved.</div>
                    <div style={{margin: '20px 0'}}>
                        <hr/>
                    </div>
                    <div className={"home-footer-container"}>
                        <a className={"law"} href={"https://beian.miit.gov.cn/"}>京ICP备2021037656号-1</a>
                    </div>
                </div>

            </div>

        </div>
    // #f5f5f7
    )
}

export default Home