// Todo Items 
const todoInput = document.getElementsByClassName("todo-input")[0];
const todoButton = document.getElementsByClassName("todo-button")[0];
const todoList = document.getElementsByClassName("todo-list")[0];

todoButton.addEventListener('click', (event)=>{
    event.preventDefault();
    if(todoInput.value !== ""){
        // creating a div
        const div = document.createElement("div");
        div.classList.add("todo");

        // creating a li
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.innerText = todoInput.value;
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

        // adding to ul and clearing the input field
        todoList.appendChild(div);
        todoInput.value = "";
    }else{
        alert("Please add the Item");
    }
    
})

todoList.addEventListener('click',(event) =>{
    const item = event.target;

    if(item.classList[0] === "delete-btn"){
        item.parentElement.remove();
    }

    if(item.classList[0] === "complete-btn"){
        item.parentElement.classList.add('completed')
        item.previousElementSibling.style.textDecoration = "line-through";

        item.parentElement.style.opacity = "0.5";
        // console.log(item.previousElementSibling.style.textDecoration);
    }
})

// Select list

const filterOption = document.getElementsByClassName("filter-todo")[0];

filterOption.addEventListener("click",(event)=>{
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        // console.log(todo.classList);
        switch (event.target.value) {
            case "all": 
                todo.style.display = 'flex';
                break;
            case "completed":
                // console.log(event.target);
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
})
