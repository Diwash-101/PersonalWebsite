import "./App.css";
import MainText from "./js/Typewriter.js";

function App() {
  return (
    <div className="App">
      <div className="profilepic"></div>
      <div className="content">
        <div className="ltext">Hi, I'm</div>

        <div className="name">Diwash Dahal </div>

        <div className="ltext">
          I am a <p className="description">Developer </p>
        </div>

        <MainText />
        <div className="footer">
          <a
            href="https://www.instagram.com/d_boss_101_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://github.com/Diwash-101"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
