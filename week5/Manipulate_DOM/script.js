const h1Tag = document.querySelector("h1");
const pTag = document.querySelector("p");
const aTag = document.querySelector("a");

for (let index = 0; index < 2; index++) {
  h1Tag.insertAdjacentText("beforebegin", index);
}

for (let index = 0; index < 4; index++) {
  pTag.insertAdjacentText("beforebegin", index);
}

for (let index = 0; index < 7; index++) {
  let aLink = document.querySelector("a");
  let node = document.createElement("a");
  let nodeText = document.createTextNode(index);
  node.appendChild(nodeText);
  aLink.replaceWith(node);
}
