import "../../styles/header.css";
import logoImg from "../../images/logo.png";

export const header = (function() {
    const headerDOM = document.createElement("header");

    const image = document.createElement("img");
    image.src = logoImg;
    image.alt = "Todo Logo";

    const h1 = document.createElement("h1");
    h1.innerText = "Todo List";

    headerDOM.appendChild(image);
    headerDOM.appendChild(h1);

    return headerDOM; 
})();
