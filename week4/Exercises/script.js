let birthYear = 1989;
let futureYear = 2050;
let age = futureYear - birthYear;
age = 22;

age < 30 && age > 20 ? console.log("20 ile 30 arasinda") : console.log("DEGIL");

if (3 > 2) {
  var value = 33;
  console.log(value);
} else {
  console.log("merhaba");
}
console.log(value);

let language = "de-sch";

switch (language) {
  case "en":
  case "en-us":
  case "en-sp":
    console.log("Hello");
    break;
  case "de":
  case "de-sch":
    console.log("Hallo");
    break;
  default:
    console.log("I do not speak that language");
    break;
}

if (language === "english") {
  console.log("Hello");
} else if (language === "german") {
  console.log("Hallo");
} else {
  console.log("I do not speak that language");
}

let a = 0;
while (5 > a) {
  console.log("hello");
  a++;
}

for (let i = 0; i < 5; i++) {
  debugger;
  console.log(i);
}

for (let counter = 0; counter < 5; counter++) {
  console.log(counter);
}

let students = ["Alex", "Marc", "Kevin"];

students.forEach((student, index) =>
  console.log(index + 1 + ". student is " + student)
);

let x = 1;
do {
  console.log(x);
  x++;
} while (x < 5);

for (let index = 0; index < value; index++) {
  if (index == 3) {
    continue;
  } else if (index == 7) {
    break;
  }
  console.log(index);
}

let name = "muratInGlobal";

if (3 > 2) {
  let name = "muratInIf";
  console.log(name);
}
console.log(name);

if (3 > 2) {
  var surname = "gul";
}
console.log(surname);
