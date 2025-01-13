import { header } from "./ui/header.js";
import { mainContent } from "./ui/mainContent.js";


export const view = (function() {
    const body = document.body;

    function initHomepage() {
        body.appendChild(header);
        body.appendChild(mainContent);
    }

    return { initHomepage };
})(); 
