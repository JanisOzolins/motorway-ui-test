import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <div className="navbar">
      <img src={"./logo.png"} alt="" className="navbar__image" />
    </div>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
