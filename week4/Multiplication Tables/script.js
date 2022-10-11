let number = parseInt(prompt("Enter a number between 0 and 9"));

while (typeof number != Number || number < 0 || number > 9) {
  if (number >= 0 && number <= 9) {
    break;
  }
  number = parseInt(prompt("Enter a number between 0 and 9"));
}
window.alert(`${number}*9=${number * 9}`);
