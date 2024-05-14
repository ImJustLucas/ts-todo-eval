import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { TodoProvider } from "./contexts/todo.context.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
