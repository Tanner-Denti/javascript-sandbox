import { header } from "./ui/header.js";
import { mainContent } from "./ui/mainContent.js";


export const view = (function() {
    const _body = document.body;

    function initHomepage() {
        _body.appendChild(header);
        _body.appendChild(mainContent);
    }

    return { initHomepage };
})(); 
