import logo from './logo.svg';
import './App.css';
import Game from './game/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className={"breath"}>❤</div>
        <p>
          ❤我爱豆豆❤
        </p>
          <Game/>
      </header>
    </div>
  );
}

export default App;
