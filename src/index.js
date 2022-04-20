// ./src/index.js

// Imports rEACT AND React's Document Object Model interface.
import React from "react";
import ReactDOM from "react-dom";
// Components
import App from "./App";
// Styles
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);