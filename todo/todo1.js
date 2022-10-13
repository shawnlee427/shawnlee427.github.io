const todoInputElem = document.querySelector('#todo-input');
const todoListElem = document.querySelector('#todo-container');
const todoAddBtnElem = document.querySelector("#todo-btn-add")

let todos = [];

const appendTodos = (text) => {
    const newTodos = todos.concat({ content: text });
    todos = newTodos;
    paintTodos();
}

const paintTodo = (todo) => {
    const todoItemElem = document.createElement('div');
    todoItemElem.classList.add(...['todo-item', 'col', 'col-12', 'p-2', 'input-group']);

    const todoElem = document.createElement('input');
    todoElem.type = "text";
    todoElem.disabled = true;
    todoElem.classList.add(...['todo', 'form-control']);
    todoElem.value = todo.content;

    todoItemElem.appendChild(todoElem);

    todoListElem.appendChild(todoItemElem);
}

const paintTodos = () => {
    todoListElem.innerHTML = null;
    todos.forEach(todo => { paintTodo(todo); });
}

const init = () => {
    todoAddBtnElem.addEventListener("click", () => {
        appendTodos(todoInputElem.value); todoInputElem.value = '';
    });

    todoInputElem.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            appendTodos(e.target.value); todoInputElem.value = '';
        }
    });
}

(function () {
    init();
})();