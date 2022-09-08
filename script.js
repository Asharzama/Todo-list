// Todo Items
const todoInput = document.getElementsByClassName("todo-input")[0];
const todoButton = document.getElementsByClassName("todo-button")[0];
const todoList = document.getElementsByClassName("todo-list")[0];
const alertText = document.getElementsByClassName("alert")[0];

todoButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (todoInput.value !== "") {
    alertText.style.visibility = "hidden";
    // creating a div
    const div = document.createElement("div");
    div.classList.add("todo");

    // creating a input
    const li = document.createElement("input");
    li.classList.add("todo-item");
    li.setAttribute("readonly", "readonly");
    li.value = todoInput.value;
    div.appendChild(li);

    // creating buttons
    const completed = document.createElement("button");
    completed.innerHTML = "<i class = 'fas fa-check'></i>";
    completed.classList.add("complete-btn");
    div.appendChild(completed);

    const deleteItem = document.createElement("button");
    deleteItem.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteItem.classList.add("delete-btn");
    div.appendChild(deleteItem);

    // edit button
    const editItem = document.createElement("button");
    editItem.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    editItem.classList.add("edit-btn");
    div.appendChild(editItem);

    // adding to ul and clearing the input field
    todoList.appendChild(div);
    todoInput.value = "";
  } else {
    alertText.style.visibility = "visible";
  }
});

todoList.addEventListener("click", (event) => {
  const item = event.target;

  // Delete Button
  if (item.classList[0] === "delete-btn") {
    item.parentElement.remove();
  }

  // Complete Button
  if (item.classList[0] === "complete-btn") {
    item.parentElement.classList.add("completed");
    if (item.previousElementSibling.style.textDecoration === "") {
      item.previousElementSibling.style.textDecoration = "line-through";
      item.parentElement.style.opacity = "0.5";
    } else {
      item.previousElementSibling.style.textDecoration = "";
      item.parentElement.style.opacity = "1";
      item.parentElement.classList.remove("completed");
    }
    // console.log(item.previousElementSibling.style.textDecoration);
  }

  //Edit Button
  if (item.classList[0] === "edit-btn") {
    let itemToEdit = item.parentElement.firstChild;
    if (itemToEdit.getAttribute("readonly") === null) {
      itemToEdit.setAttribute("readonly", "readonly");
      item.style.backgroundColor = "rgb(92, 112, 141)";
    } else {
      item.style.backgroundColor = "rgb(92, 92, 33)";
      itemToEdit.removeAttribute("readonly");
    }
  }
});

// Select list

const filterOption = document.getElementsByClassName("filter-todo")[0];

filterOption.addEventListener("click", (event) => {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    // console.log(todo.classList);
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        // console.log(event.target);
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
});
