let myColorChoices = [
  "blue",
  "yellow",
  "red",
  "pink",
  "white",
  "blue",
  "yellow",
  "red",
  "pink",
  "white",
  "blue",
  "yellow",
  "red",
  "pink",
  "white",
  "blue",
  "yellow",
  "red",
  "pink",
  "white",
  "blue",
  "yellow",
  "red",
  "pink",
  "white",
];

// first version
// myColorChoices.forEach((choice, index) => {
//   console.log(`My #${index + 1} choice is ${choice}`);
// });

// second version
myColorChoices.forEach((choice, index) => {
  let number = index + 1;
  let lastDigit = parseInt(number.toString().split("").pop());
  let message = "";

  switch (lastDigit) {
    case 1:
      //   if (index + 1 !== 11) {
      //     console.log(`My ${index + 1}st choice is ${choice}`);
      //   }
      index + 1 !== 11
        ? (message = `My ${index + 1}st choice is ${choice}`)
        : (message = `My ${index + 1}th choice is ${choice}`);
      break;
    case 2:
      //   if (index + 1 !== 12) {
      //     console.log(`My ${index + 1}nd choice is ${choice}`);
      //   }
      index + 1 !== 12
        ? (message = `My ${index + 1}nd choice is ${choice}`)
        : (message = `My ${index + 1}th choice is ${choice}`);
      break;
    case 3:
      //   if (index + 1 !== 13) {
      //     console.log(`My ${index + 1}rd choice is ${choice}`);
      //   }
      index + 1 !== 13
        ? (message = `My ${index + 1}rd choice is ${choice}`)
        : (message = `My ${index + 1}th choice is ${choice}`);
      break;

    default:
      message = `My ${index + 1}th choice is ${choice}`;
      break;
  }

  console.log(message);
});
