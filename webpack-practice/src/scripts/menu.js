

export default function(content) {
    const title = document.createElement("h1");
    title.innerText = "Pizza Pie Guy Menu!";

    const paragraph = document.createElement("p");
    paragraph.innerText = "Cheese Pizza -- 10.99!";

    content.appendChild(title);
    content.appendChild(paragraph);
};
