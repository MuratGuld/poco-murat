let name = prompt("Please enter your name");

while (name == "") {
  alert("Wrong input!");
  name = prompt("Please enter your name");
}

alert("Hello " + name);
