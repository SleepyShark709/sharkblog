import './index.css'
import GiftImage from '../images/1.png'
import Logo from '../images/logo.png'
import Todo from '../components/todo/index'
const Home = () => {
    return(
        <div style={{backgroundColor: '#ffffff'}}>
            <div className={"navigator-bar"}>
                <div className={"navigator-bar-buttons"}>
                    <a className={"navigator-bar-a logo-a"} href="#首页"></a>
                    <a className={"navigator-bar-a"} href="#大事件">大事件记录</a>
                    <a className={"navigator-bar-a"} href="#section2">about</a>
                    <a className={"navigator-bar-a"} href="#section3">about</a>
                    <a className={"navigator-bar-a"} href="#section4">about</a>
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
            <div className={"home-section"} id={"section2"} style={{backgroundColor: "rgb(251,251,253)"}}></div>
            <div className={"home-section"} id={"section3"} style={{backgroundColor: "rgb(53,40,60)"}}></div>
            <div className={"home-section block-container"} id={"section4"}>
                <div className={"home-block"}></div>
                <div className={"home-block"}></div>
                <div className={"home-block"}></div>
                <div className={"home-block"}></div>
                <div className={"home-block"}></div>
                <div className={"home-block"}></div>
            </div>
            <div className={"home-footer"}>
                <div className={"home-footer-container"}>
                    <div className={"law"} style={{marginTop: '20px'}}>All content copyright  一条鲨鱼 © 2021 • All rights reserved.</div>
                    <div style={{margin: '20px 0'}}>
                        <hr/>
                    </div>
                    <div className={"home-footer-container"}>
                        <div className={"law"}>京ICP备2021037656号-1</div>
                    </div>
                </div>

            </div>

        </div>
    // #f5f5f7
    )
}

export default Home