import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Brisbane" />
      <footer>
        <a
          href="https://github.com/taegen-seto"
          target="_blank"
          title="github profile"
          rel="noreferrer"
        >
          coded by Taegen Seto 🖤
        </a>
        <a
          href="https://github.com/taegen-seto/react-weather-app"
          target="_blank"
          title="github repository"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub 🐈‍⬛
        </a>
        <a
          href="https://creative-bienenstitch.netlify.app/"
          target="_blank"
          title="netlify site"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
