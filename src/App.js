import "./App.css";
import MainText from "./js/MainText.js";

function App() {
  return (
    <div>
      <div className="App">
        <MainText />
      </div>
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
  );
}

export default App;
