function getResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I assist you today?";
  } else if (input.includes("how are you")) {
    return "I'm just a program, but I'm doing great! Thanks for asking.";
  } else if (input.includes("what is your name")) {
    return "I am your friendly JavaScript Chatbot.";
  } else if (input.includes("help")) {
    return "I can answer simple questions or chat with you!";
  } else if (input.includes("weather")) {
    return "I can't check the weather yet, but maybe soon!";
  } else if (input.includes("bye") || input.includes("exit")) {
    return "Goodbye! Have a nice day!";
  } else {
    return "Sorry, I don't understand. Can you try asking differently?";
  }
}

function sendMessage() {
  const inputBox = document.getElementById("userInput");
  const input = inputBox.value.trim();
  if (!input) return;

  const chat = document.getElementById("chatMessages");

  // Display user message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = "You: " + input;
  chat.appendChild(userMsg);

  // Get and display bot response
  const response = getResponse(input);
  const botMsg = document.createElement("div");
  botMsg.className = "message bot";
  botMsg.textContent = "Bot: " + response;
  chat.appendChild(botMsg);

  chat.scrollTop = chat.scrollHeight;
  inputBox.value = "";

  if (input.toLowerCase().includes("bye") || input.toLowerCase().includes("exit")) {
    inputBox.disabled = true;
  }
}
