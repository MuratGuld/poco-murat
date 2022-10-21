var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "https://m.media-amazon.com/images/I/51Dl6lXXesL.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "https://images.penguinrandomhouse.com/cover/9780307476708",
  },
];
let body = document.querySelector("body");
let ulTag = document.createElement("ul");
ulTag.style.listStyleType = "none";

books.forEach((book) => {
  let liTag = document.createElement("li");

  // I created p tag to store information
  let paragraphTag = document.createElement("p");
  let paragraphText = document.createTextNode(`${book.title} (${book.author})`);
  paragraphTag.appendChild(paragraphText);

  // img tag to display image
  let imgTag = document.createElement("img");
  imgTag.setAttribute("src", book.url);
  imgTag.style.width = "80px";
  imgTag.style.height = "auto";

  let backgroundColor;

  if (book.alreadyRead) {
    backgroundColor = "green";
  } else {
    backgroundColor = "red";
  }

  liTag.style.backgroundColor = backgroundColor;
  liTag.style.height = "200px";
  liTag.style.width = "200px";

  liTag.appendChild(paragraphTag);
  liTag.appendChild(imgTag);
  ulTag.appendChild(liTag);
});

body.insertAdjacentElement("afterend", ulTag);
