import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

import { TodoProvider } from "./TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
