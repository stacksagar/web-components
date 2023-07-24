"use strict";
class CustomButton2 extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.name = "Sagar";
    }
    connectedCallback() {
        const button = document.createElement("button");
        button.innerHTML = this.innerHTML;
        this.shadow.append(this.styles());
        this.shadow.append(button);
        console.log("not working bro");
    }
    disconnectedCallback() { }
    attributeChangedCallback() { }
    styles() {
        const style = document.createElement("style");
        style.innerText = `
      button {
          background: orange;
          color: white;
          padding: 10px 20px; 
          border: 4px;
        }
      `;
        return style;
    }
}
customElements.define("custom-button", CustomButton2);
