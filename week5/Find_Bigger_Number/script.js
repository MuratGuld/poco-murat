let firstInput = document.querySelector("#first-number");
let secondInput = document.querySelector("#second-number");
let compareButton = document.querySelector("#compare-button");
let resultParagraph = document.querySelector("#result-paragraph");

compareButton.addEventListener("click", compareNumbers);

function compareNumbers() {
  let firstNumber = Number(firstInput.value);
  let secondNumber = Number(secondInput.value);

  let message = "";

  if (firstNumber === secondNumber) {
    message = `${firstNumber} and ${secondNumber} are equal`;
  } else {
    if (firstNumber > secondNumber) {
      message = `The greater number of ${firstNumber} and ${secondNumber} is ${firstNumber}.
                The smaller number of ${firstNumber} and ${secondNumber} is ${secondNumber}.`;
    } else {
      message = `The greater number of ${firstNumber} and ${secondNumber} is ${secondNumber}.
                The smaller number of ${firstNumber} and ${secondNumber} is ${firstNumber}.`;
    }
  }

  resultParagraph.innerText = message;
}
