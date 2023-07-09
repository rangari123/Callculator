// Get all the buttons and screen display elements
const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

// Attach event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
  });
});

// Initialize variables
let calculation = []; // Store the calculation inputs
let accumulativeCalculation; // Store the accumulated calculation

// Perform calculation based on button click
function calculate(button) {
  const value = button.textContent;

  if (value === "CLEAR") {
    // Clear the calculation array and reset the screen display
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    // Evaluate the accumulated calculation and display the result
    screenDisplay.textContent = eval(accumulativeCalculation);
  } else {
    // Append the button value to the calculation array and update the screen display
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenDisplay.textContent = accumulativeCalculation;
  }
}
// join() method in JavaScript is used to join the elements of an array into a string
