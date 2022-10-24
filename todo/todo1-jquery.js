const todoListElem = $('#todo-container');

let todos = [{ id: 1, content: "중간 프로젝트 DUE 2022-10-28 23:59", isCompleted: false }];

let id = 1; // set initial id value

const completeTodo = (completeId) => {
    $.each(todos, (_, todo) => {
        if (todo.id == completeId) {
            todo.isCompleted = !todo.isCompleted;
        }
    });
    paintTodos();
}

const paintTodo = (_, todo) => {
    const todoItemElem = $('<div>').addClass('todo-item col col-12 p-2 input-group');
    const checkboxElem = $('<div>').addClass('checkbox input-group-prepend text-dark').text(todo.isCompleted ? "✔" : "☐");
    checkboxElem.click(() => completeTodo(todo.id));
    const todoElem = $('<input>').attr("type", "text").attr("disabled", true).addClass("todo form-control").val(todo.content);
    todoItemElem.append(checkboxElem);
    todoItemElem.append(todoElem);
    todoListElem.append(todoItemElem);
}

const paintTodos = () => {
    todoListElem.empty();
    $.each(todos, paintTodo)
}

const todoInputElem = $('#todo-input');
const todoAddBtnElem = $("#todo-btn-add");

const appendTodos = (text) => {
    let newId = ++id;
    const newTodos = todos.concat({ id: newId, content: text, isCompleted: false });
    todos = newTodos;
    paintTodos();
}

const init = () => {
    todoAddBtnElem.on("click", () => {
        appendTodos(todoInputElem.val()); todoInputElem.val('');
    });

    todoInputElem.on('keypress', (e) => {
        if (e.key === 'Enter') {
            appendTodos($(e.target).val()); $(e.target).val('');
        }
    });
    paintTodos();
}

$(function () {
    init();
});