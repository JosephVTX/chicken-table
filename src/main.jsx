import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const renderLocal = (renderLocalElement) => {
  ReactDOM.createRoot(renderLocalElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const renderInterval = (
  idRoot,
  render,
  miliseconds = 1000
) => {
  let exist = false;
  const keyInterval = setInterval(() => {
    const rootElement = document.getElementById(idRoot);

    if (!rootElement) return;
    if (exist) {
      exist = false;
      console.log("clearInterval of ", rootElement);
      clearInterval(keyInterval);
    } else {
      exist = true;
      console.log("rendering in->", rootElement);
      render(rootElement);
    }
  }, miliseconds);
};


const initRenderTable = async () => {

  const idTablaAlergeno = "tablaAlergenos";

  const alergenoElement = document.getElementById(idTablaAlergeno);

  if (alergenoElement) {
    renderLocal(alergenoElement);
  } else {
    renderInterval(idTablaAlergeno, renderLocal);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  initRenderTable();
});