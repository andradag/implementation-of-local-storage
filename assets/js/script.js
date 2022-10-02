// target all HTML elements
const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

const todos = [];

function renderToodos() {}

const init = function () {
  // get "todos" from Local Storage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
};

function storeTodos() {}

todoForm.addEventListener("submit", function (event) {});

todoList.addEventListener("click", function (event) {});

init();
