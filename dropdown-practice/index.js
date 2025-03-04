

const dropDownDiv = (function() {
    const dropDownDiv = document.createElement("div");

    dropDownDiv.innerHTML = `
          <nav>
            <a href="https://google.com">Google</a>
            <a href="https://youtube.com">YouTube</a>
            <a href="https://github.com">Github</a>
          </nav>`;

    return dropDownDiv;
})();

const dropDownComponent = (function() {
    let isOpen = false;

    const dropDownContainer = document.createElement("div");
    dropDownContainer.classList.add("drop-down-container");

    const btn = document.createElement("button");
    btn.addEventListener("click", _handleBtnClick);

    dropDownContainer.appendChild(btn);

    function _handleBtnClick() {
        isOpen = !isOpen;
        if (isOpen) {
            dropDownContainer.appendChild(dropDownDiv);
        } else {
            dropDownContainer.removeChild(dropDownDiv);
        }
    }

    return dropDownContainer;
})();

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    body.appendChild(dropDownComponent);
})


