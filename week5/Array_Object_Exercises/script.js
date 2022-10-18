// INSTANSE OF OBJECT
function Person(name = "User", age = 18, married = false) {
  this.name = name;
  this.age = age;
  this.married = married;

  this.introduce = function () {
    console.log(`My name is ${name}. I am ${age} years old.`);
  };
}

let murat = new Person("Murat", 32, true);
// console.log(Object.keys(murat));
// console.log(Object.values(murat));

// ARRAYS
let firstArray = ["HTML", "CSS", "SCSS", "Bootstrap"];
let secondArray = ["JS", "PHP"];

let combinedArray = firstArray.concat(secondArray);
combinedArray.push("Java");
combinedArray.pop();


