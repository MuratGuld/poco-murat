let button = document.querySelector("button");

// button.addEventListener("click", () => {
//   window.alert("Button is clicked");
// });

button.addEventListener("mouseover", () => {
  //   window.alert("Button is entered");
  button.style.background = "red";
  button.style.transition = "1s";
});

button.addEventListener("mouseleave", () => {
  //   window.alert("Button is clicked");
  button.style.background = "#efefef";
});
