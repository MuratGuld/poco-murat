const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerIcon.addEventListener("click", () => {
  if (hamburgerMenu.style.display == "none") {
    hamburgerMenu.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "none";
  }
});
