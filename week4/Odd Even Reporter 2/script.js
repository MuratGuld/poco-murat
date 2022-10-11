for (let index = 0; index < 21; index++) {
  let isOdd = index % 2;
  if (isOdd == 0) {
    document.write(`${index} is even<br>`);
  } else {
    document.write(`${index} is odd<br>`);
  }
}
