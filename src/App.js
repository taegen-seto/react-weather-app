import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Madrid" />
      <footer>
        <a
          href="https://github.com/taegen-seto"
          target="_blank"
          rel="noreferrer"
        >
          <span>...coded by Taegen Seto...🖤... </span>
        </a>

        <a
          href="https://github.com/taegen-seto/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          <span>open-sourced on GitHub...🐈‍⬛...</span>
        </a>

        <a
          href="https://creative-bienenstitch.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <span>hosted on Netlify...</span>
        </a>
      </footer>
    </div>
  );
}
