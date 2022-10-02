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

function storeTodos() {}

todoForm.addEventListener("submit", function (event) {});

todoList.addEventListener("click", function (event) {});

getDataFromLocalStorage();

const onLoad = function () {
  // get todos data from Local Storage
  const todos = getDataFromLocalStorage();

  // render todo list
  renderTodos();
};

window.addEventListener("load", onLoad);
