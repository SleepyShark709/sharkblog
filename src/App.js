import './App.css';
import Game from './game/index'
import {useState} from "react";

function App() {
  const [label, setLabel ] = useState(0)
  const gameEnter = () => {
    let canvas = document.querySelector('#id-canvas-container')
    if (label === 0) {
      canvas.style.display = 'unset'
      setLabel(1)
    } else {
      canvas.style.display = 'none'
      setLabel(0)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className={"breath"}>❤</div>
        <p>
          ❤我爱豆豆❤
        </p>
        {
          label === 0 ? <Game /> : null
        }
        {/*label 为 0 的时候是进入游戏（关闭中），为 1 的时候是关闭游戏（游戏中）*/}
        <button style={label === 1 ? {marginTop: '100px'} : null} onClick={gameEnter} id={"game-enter"}>{label === 0 ? '进入游戏' : '关闭游戏'}</button>
      </header>
    </div>
  );
}

export default App;
