class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const button = document.createElement("button");
    button.innerHTML = this.innerHTML;
    this.shadow.append(this.#styles());
    this.shadow.append(button);
  }

  disconnectedCallback() {}
  attributeChangedCallback() {}

  #styles() {
    const style = document.createElement("style");
    style.innerText = `
    button {
        background: orange;
        color: white;
        padding: 10px 20px;
        background: black;
        border: 4px;
      }
    `;

    return style;
  }
}

customElements.define("custom-button", CustomButton);
