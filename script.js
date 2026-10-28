// Find the two active buttons and the paragraph used for messages.
const normalButton = document.getElementById("normal-button");
const pointerButton = document.getElementById("pointer-button");
const message = document.getElementById("message");

// A normal button can be activated with a pointer or a keyboard.
normalButton.addEventListener("click", function () {
  message.textContent = "Normal button activated. It works with a pointer and a keyboard.";
});

// CSS prevents pointer targeting, but keyboard activation still fires a click event.
pointerButton.addEventListener("click", function () {
  message.textContent = "The pointer-events button activated. CSS does not disable keyboard activation.";
});

// No custom key handlers are needed: HTML buttons already support keyboard activation.
// The third button uses the native disabled attribute, so we do not attach a handler.
