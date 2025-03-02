import "../../styles/header.css";
import logoImg from "../../images/logo.png";

export const header = (function() {
    const headerDOM = document.createElement("header");

    const _image = document.createElement("img");
    _image.src = logoImg;
    _image.alt = "Todo Logo";

    const _h1 = document.createElement("h1");
    _h1.innerText = "Todo List";

    headerDOM.appendChild(_image);
    headerDOM.appendChild(_h1);

    return headerDOM; 
})();
