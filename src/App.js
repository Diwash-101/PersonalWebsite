import "./App.css";
import { IconContext } from "react-icons";
import { BsSubstack, BsGithub, BsInstagram } from "react-icons/bs";
import MainText from "./js/MainText.js";

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
            href="https://www.instagram.com/d_llusions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <ion-icon name="logo-instagram"></ion-icon> */}
            <BsInstagram className="icon" />
          </a>
          <a
            href="https://github.com/Diwash-101"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <ion-icon name="logo-github"></ion-icon> */}
            <IconContext.Provider value={{ classname: "icon" }}>
              <BsGithub className="icon" />
            </IconContext.Provider>
          </a>
          <a
            href="https://dahaldiwash.substack.com/profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider value={{ classname: "icon" }}>
              <BsSubstack className="icon" />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
