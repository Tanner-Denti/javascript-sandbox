import "../../styles/header.css";

export const header = (function() {
    const headerDOM = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.innerText = "TODO";

    headerDOM.appendChild(h1);

    return headerDOM; 
})();
