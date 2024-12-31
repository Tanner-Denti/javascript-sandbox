import "../styles.css";
import restaurantImg from "../images/restaurant.jpg";

export default function() {
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.innerText = "Pizza Pie Guy!";

    const image = document.createElement("img");
    image.src = restaurantImg;
    image.alt = "Pizza restaurant image.";

    const paragraph = document.createElement("p");
    paragraph.innerText = "Come get a slice at the best pizza shop in town!";

    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(paragraph);
};
