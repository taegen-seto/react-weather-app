import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div classNameName="App">
      <Weather />

      <footer>
        <a
          href="https://github.com/taegen-seto"
          target="_blank"
          rel="noreferrer"
        >
          Coded by Taegen Seto
        </a>
        🖤
        <a
          href="https://github.com/taegen-seto/aplicacion-del-tiempo"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        🐈‍⬛
        <a
          href="https://rad-ganache.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
