import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StyledGlobal } from "./styles/globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledGlobal/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
