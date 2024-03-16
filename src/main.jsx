import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(root);

console.log(App);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
