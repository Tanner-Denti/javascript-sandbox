

export default function(content) {
    const title = document.createElement("h1");
    title.innerText = "Contact Us";

    const form = document.createElement("form");
    form.setAttribute("id", "contact-form");

    const nameContainer = document.createElement("div");
    const emailContainer = document.createElement("div");
    const messageContainer = document.createElement("div");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name-input");
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "name-input");
    nameInput.setAttribute("type", "text");   
    nameInput.setAttribute("name", "name-input");
    nameInput.required = true;

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email-input");
    emailLabel.textContent = "Email: ";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email-input");
    emailInput.setAttribute("type", "email");   
    emailInput.setAttribute("name", "email-input");
    emailInput.required = true;

    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message-input");
    messageLabel.textContent = "Message: ";
    const messageInput = document.createElement("input");
    messageInput.setAttribute("id", "message-input");
    messageInput.setAttribute("type", "text");   
    messageInput.setAttribute("name", "message-input");
    messageInput.required = true;

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "submit";

    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);

    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);

    messageContainer.appendChild(messageLabel);
    messageContainer.appendChild(messageInput);

    form.appendChild(nameContainer);
    form.appendChild(emailContainer);
    form.appendChild(messageContainer);
    form.appendChild(submitButton);

    content.appendChild(title);
    content.appendChild(form);
};
