function sendMessage() {
    // Get the user-entered message
    var userMessage = document.getElementById("userMessage").value;

    // Check if the message is not empty
    if (userMessage.trim() !== "") {
        // Create a new paragraph element
        var messageElement = document.createElement("p");

        // Set the text content of the paragraph to the user's message
        messageElement.textContent = userMessage;

        // Get the container where you want to display the message
        var messageContainer = document.getElementById("messageContainer");

        // Append the new paragraph element to the container
        messageContainer.appendChild(messageElement);

        // Clear the input field for the next message
        document.getElementById("userMessage").value = "";
    } else {
        alert("Please enter a message before sending.");
    }
}