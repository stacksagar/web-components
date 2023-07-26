class CountWords extends HTMLParagraphElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const span = document.createElement("span");
    span.innerText = "words is = " + this.countTotalParentWords().toString();
    this.shadow.append(span);
  }

  private countTotalParentWords() {
    const parentEle = this.parentElement;
    const content = parentEle?.innerText || parentEle?.textContent;
    return content?.split(/\s+/).length || 0
  }
}

customElements.define("count-words", CountWords, { extends: "p" });
