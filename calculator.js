const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

    if (type === "number") {
      currentInput += value;
      updateDisplay(currentInput);
    } else if (type === "operator") {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (type === "equals") {
      const result = eval(`${previousInput} ${operator} ${currentInput}`);
      updateDisplay(result);
      currentInput = result;
    } else if (type === "clear") {
      currentInput = "";
      previousInput = "";
      operator = "";
      updateDisplay("0");
    }
  });
});

function updateDisplay(value) {
  document.querySelector(".display").textContent = value;
}
