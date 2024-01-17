import React from "react";
// import ReactDOM from "react-dom";

import "./App.css";
import "./Weather.css";
// import axios from "axios";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
