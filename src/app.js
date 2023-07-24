"use strict";
class CountWords extends HTMLParagraphElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        console.log();
        const span = document.createElement("span");
        span.innerText = "words is = " + this.countTotalParentWords().toString();
        this.shadow.append(span);
    }
    countTotalParentWords() {
        const parentEle = this.parentElement;
        const content = (parentEle === null || parentEle === void 0 ? void 0 : parentEle.innerText) || (parentEle === null || parentEle === void 0 ? void 0 : parentEle.textContent);
        return (content === null || content === void 0 ? void 0 : content.split(" ").length) || 0;
    }
}
customElements.define("count-words", CountWords, { extends: "p" });
