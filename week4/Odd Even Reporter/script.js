let number = parseInt(prompt("Please enter a number between 0 and 20"));

if (isNaN(number)) {
  alert("Not a valid number");
} else if (number < 0 || number > 20) {
  window.alert("Number is not between 0 and 20");
} else if (number % 2 == 0) {
  alert(`${number} is even`);
} else {
  alert(`${number} is odd`);
}
