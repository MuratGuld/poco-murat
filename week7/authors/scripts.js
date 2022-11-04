let authors = [
  {
    firstName: "Andreas",
    lastName: "Neeser",
  },
  {
    firstName: "Anna",
    lastName: "Ruchat",
  },
  {
    firstName: "Arno",
    lastName: "Camenisch",
  },
  {
    firstName: "Barbara",
    lastName: "Schibli",
  },
  {
    firstName: "Demian",
    lastName: "Leinhard",
  },
  {
    firstName: "Flurina",
    lastName: "Bader",
  },
  {
    firstName: "Franco",
    lastName: "Supino",
  },
  {
    firstName: "Lukas",
    lastName: "Hartmann",
  },
  {
    firstName: "Marius",
    lastName: "Popescu",
  },
  {
    firstName: "Reto",
    lastName: "Haenny",
  },
  {
    firstName: "Sandra",
    lastName: "Kuenzi",
  },
  {
    firstName: "Simon",
    lastName: "Libsig",
  },
];

function fonk(e) {
  e.nextElementSibling.firstChild.style.color = "red";
}

let ul = document.querySelector("main ul");

authors.forEach((author, index) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.setAttribute("onclick", "fonk(this)");
  img.setAttribute("id", `image-${index}`);
  img.setAttribute(
    "src",
    `img/tile_${author.firstName}_${author.lastName}.jpg`
  );

  let h3 = document.createElement("h3");
  let span = document.createElement("span");
  let text = document.createTextNode(`${author.firstName} ${author.lastName}`);
  span.appendChild(text);
  h3.appendChild(span);

  li.appendChild(img);
  li.appendChild(h3);
  ul.appendChild(li);
});
