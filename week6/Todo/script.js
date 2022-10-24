let input = document.querySelector("input");
let addButton = document.querySelector("#add-button");
let todoList = document.querySelector("#todo-list");

function addToDoToList() {
  let li = document.createElement("li");
  li.style.width = "350px";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";

  let liText = document.createTextNode(input.value);

  let deleteButton = document.createElement("button");
  deleteButton.style.marginLeft = "5px";
  let deleteButtonText = document.createTextNode("Delete");
  deleteButton.addEventListener("click", deleteTodo);
  deleteButton.appendChild(deleteButtonText);

  li.appendChild(liText);
  li.appendChild(deleteButton);

  todoList.appendChild(li);

  input.value = "";
}

function deleteTodo(element) {
  element.target.parentNode.remove();
}

addButton.addEventListener("click", addToDoToList);
