// target all HTML elements
const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const todos = [];

function renderToodos() {}

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
