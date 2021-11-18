import './App.css';
import Game from './game/index'
import {useState} from "react";

function App() {
  const [label, setLabel ] = useState('进入游戏')
  const gameEnter = () => {
    let canvas = document.querySelector('#id-canvas')
    if (label === '进入游戏') {
      canvas.style.display = 'unset'
      setLabel('关闭游戏')
    } else {
      canvas.style.display = 'none'
      setLabel('进入游戏')
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
          <Game/>
        <button onClick={gameEnter} id={"game-enter"}>{label}</button>
      </header>
    </div>
  );
}

export default App;
