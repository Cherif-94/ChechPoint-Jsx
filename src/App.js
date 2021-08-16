// import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import test2 from "./assets/test2.jpg";
import ReactPlayer from "react-player";

function App() {
  const header = {
    border: "border:solid 1px black",
    maxWidth: "100vw",
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div style={header}>
          <h1 className="title-red">Votre nom ici</h1>
          <br />
          <img src="./test1.jpg " alt="logo" /> <br />
          <img src={test2} alt="logo" />
        </div>
      </header>

      <div className="player-wrapper">
        <h1>this is my video </h1>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
