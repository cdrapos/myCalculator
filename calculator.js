const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");

let currentExpression = ""; // What the user sees being built
let currentInput = ""; // Just the numeric input for evaluation
let history = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

    if (type === "number" || type === "operator") {
      currentExpression += value;
      currentInput += value;
      updateDisplay(currentExpression);
    } else if (type === "clear") {
      currentExpression = "";
      currentInput = "";
      updateDisplay("0");
    } else if (type === "equals") {
      try {
        const cleanInput = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(cleanInput);

        history.push({ expression: currentExpression, result });

        currentExpression += " = " + result;
        updateDisplay(currentExpression);

        // Reset for new input
        currentInput = result.toString();
        currentExpression = "";
      } catch (err) {
        updateDisplay("Error");
        currentInput = "";
        currentExpression = "";
      }
    } else if (type === "history") {
      showHistory();
    }
  });
});

function updateDisplay(value) {
  display.textContent = value;
}

function showHistory() {
  if (history.length === 0) {
    alert("📭 No history yet!");
    return;
  }

  const formatted = history
    .map((h) => `${h.expression} = ${h.result}`)
    .join("\n");
  alert("📜 History:\n" + formatted);
}
