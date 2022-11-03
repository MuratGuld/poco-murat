let input = document.querySelector("input");
let addButton = document.querySelector("#add-button");
let todoList = document.querySelector("#todo-list");
let form = document.querySelector("form");

function load() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < 12; index++) {
        let li = createLiElement();
        let liText = document.createTextNode(data[index].title);
        li.appendChild(liText);

        let span = createSpan();
        let deleteButton = createDeleteButton();
        let checkbox = createCheckbox();

        span.appendChild(checkbox);
        span.appendChild(deleteButton);
        li.appendChild(span);
        todoList.appendChild(li);
      }
    });
}

function addToDoToList(e) {
  e.preventDefault();

  let li = createLiElement();
  let liText = document.createTextNode(input.value);
  li.appendChild(liText);

  let span = createSpan();
  let deleteButton = createDeleteButton();
  let checkbox = createCheckbox();

  span.appendChild(checkbox);
  span.appendChild(deleteButton);
  li.appendChild(span);
  todoList.appendChild(li);

  input.value = "";
}

function deleteTodo(element) {
  element.target.parentNode.parentNode.remove();
}

function createLiElement() {
  let li = document.createElement("li");
  li.style.width = "550px";
  li.style.marginBottom = "10px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";

  return li;
}

function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.style.marginLeft = "5px";
  let deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  deleteButton.addEventListener("click", deleteTodo);

  return deleteButton;
}

function createCheckbox(element) {
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", checkCheckbox);

  return checkbox;
}

function checkCheckbox(element) {
  let parentNode = element.target.parentNode.parentNode;

  if (element.target.checked) {
    parentNode.style.textDecoration = "line-through";
    parentNode.style.backgroundColor = "green";
    parentNode.style.color = "white";
  } else {
    parentNode.style.textDecoration = "none";
    parentNode.style.color = "black";
    parentNode.style.backgroundColor = "white";
  }
}

function createSpan() {
  return document.createElement("span");
}

form.addEventListener("submit", addToDoToList);

document.addEventListener("DOMContentLoaded", load);
