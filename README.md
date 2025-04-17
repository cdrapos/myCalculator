
# 🧮 JavaScript Calculator — Project Documentation

## 📌 Overview

This project is a simple web-based calculator built using **HTML**, **CSS**, and **JavaScript**. It performs basic arithmetic operations such as addition, subtraction, multiplication, division, and percentage. The calculator is styled with a modern UI and supports clear/reset and decimal input.

---

## 🛠️ Technologies Used

- **HTML5** – for the structure of the calculator.
- **CSS3** – for styling and responsive design.
- **Vanilla JavaScript (ES6)** – for interactivity and logic handling.

---

## 💡 Features

- Real-time arithmetic calculation
- Clear/Reset function (`C`)
- Decimal point support (`,` or `.`)
- Responsive layout
- Dark mode background for modern look
- Styled buttons for a clean UX

---

## 🧱 Folder Structure

```
calculator/
├── index.html
├── style.css
└── script.js
```

---

## 🔤 HTML (index.html)

- Defines the calculator layout using buttons and a display area.
- Each button has `data-type` and `data-value` attributes to differentiate numbers, operators, and control keys.

Example button:
```html
<button class="btn" data-type="operator" data-value="+">+</button>
```

---

## 🎨 CSS (style.css)

- Applies styling to the calculator layout:
  - Flexbox used for grid alignment
  - Rounded buttons with hover effects
  - Dark background with contrasting button colors (e.g. orange `=` and red `C`)

---

## 🧠 JavaScript Logic (script.js)

Handles:

- Button click events using `event delegation`
- Input parsing and storing current/previous values
- Operator handling with `+`, `-`, `*`, `/`, `%`
- Calculating and displaying results
- Resetting and updating the UI

### Key Variables:
- `currentInput` – Current number being typed
- `previousInput` – Stored number for the operation
- `operator` – Selected arithmetic operator

### Key Functions:
- `updateDisplay()` – Updates the screen with current value
- `handleNumberClick()` – Appends digits to input
- `handleOperatorClick()` – Stores operator and previous number
- `calculateResult()` – Uses `eval()` or manual logic to compute

---

## ⚠️ Improvements (To Do)

- Replace `eval()` with safer expression parser
- Add keyboard support
- Add scientific calculator functions (sin, cos, sqrt, etc.)
- Add history of calculations
- Improve accessibility (ARIA roles, tab navigation)

---

## 📸 Screenshot

![Calculator Screenshot](screenshot.png)  
*(Replace with a screenshot of your calculator UI)*

---

## 👨‍💻 Author

- **Name**: Chris Drapos  
- **GitHub**: [cdrapos](https://github.com/cdrapos)  
- **Background**: IT Applications Engineer, passionate about self-improvement and front-end development.
