// target all HTML elements
const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const todos = [];

const renderTodos = function () {
  // clear the todo list
  todoList.innerHTML = "";

  // set the count of todo items
  todoCountSpan.textContent = todos.length;

  for (let i = 0; i < todos.length; i++) {
    // get the todo item
    const todo = todos[i];

    // construct the li element
    const li = document.createElement("li");

    // set the text content of li
    li.testContent = todo;

    // set attributes of li
    li.setAttribute("data-index", i);

    // construct a button element
    const button = document.createElement("button");

    // set the text of the button element
    button.textContent = "Complete ✓";

    li.appendChild(button);
    todoList.appendChild(li);
  }
};

const getDataFromLocalStorage = function () {
  // get "todos" from Local Storage
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

  // check if not null
  if (!dataFromLocalStorage) {
    return dataFromLocalStorage;
  } else {
    return [];
  }
};

function storeTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const onSubmit = function (event) {
  event.preventDefault();

  // clean up the input element and get the text content and remove any white spaces hello

  const todoText = todoInput.Value.trim();

  if (todoText === "") {
    return;
  }

  // if not empty then get todos from Local Storage
  const todos = getDataFromLocalStorage();

  // push new todo item to array
  todos.push(todoText);

  // rest the input from value
  todoInput.value = "";

  storeTodos();
  renderTodos();
};

todoForm.addEventListener("submit", onSubmit);

todoList.addEventListener("click", function (event) {});

getDataFromLocalStorage();

const onLoad = function () {
  // get todos data from Local Storage
  const todos = getDataFromLocalStorage();

  // render todo list
  renderTodos();
};

window.addEventListener("load", onLoad);
