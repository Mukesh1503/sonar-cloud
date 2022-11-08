import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

<>
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  </style>
  <script
    src="https://kit.fontawesome.com/3eae5f27e8.js"
    crossorigin="anonymous"
  ></script>
</>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
