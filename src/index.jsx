import React from "react";
import ReactDOM from "react-dom";
import Chat from "./Chat/index.jsx";
import "./style.scss";
import "./index.html";

const appElm = document.querySelector("#app");
ReactDOM.render(<Chat />, appElm);
