import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container maxWidth="xl">
      <App/>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
