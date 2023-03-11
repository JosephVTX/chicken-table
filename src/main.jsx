import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

class Custom extends HTMLElement {
  static get observedAttributes() {
    return ["url-css", "url-js"];
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.initHTML();
  }

  initHTML() {
    this.root.innerHTML = /*html*/ `
      <div id="container-css"></div>
      <div id="root"></div>
      <div id="container-js"></div>
    `;
  }

  get containerCSS() {
    return this.root.querySelector("#container-css");
  }

  get containerJS() {
    return this.root.querySelector("#container-js");
  }

  get containerHTML() {
    return this.root.querySelector("#root");
  }

  renderCSS(src) {
    this.containerCSS.innerHTML = /*html*/ `
    <link rel="stylesheet" href="${src}">
    `;
  }

  renderJS(src) {
    this.containerJS.innerHTML = src
      ? /*html*/ `
        <script src="${src}"></script>
      `
      : this.containerJS.innerHTML;
  }

  renderHTML() {
    const root = this.containerHTML;

    
      ReactDOM.createRoot(root).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
  }

  connectedCallback() {
    if (this.isConnected) {
      this.renderHTML();

    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "url-css":
        this.renderCSS(newValue);
        break;
      case "url-js":
        this.renderJS(newValue);
    }
  }
}

window.customElements.define("mostro-solution", Custom);