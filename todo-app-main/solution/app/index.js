const todoInput = document.getElementById('todo-input');
todoInput.addEventListener('keyup', async function(event) {
    if(event.keyCode === 13 && todoInput.value !== '') {
        console.log(todoInput.value);
        saveTodo(todoInput);
        todoInput.value = '';
    }
});

function saveTodo(todo) {
    if(!todo) return;

    let todos = [];
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    let isTodoPresent = todos.filter(oldTodo => oldTodo.toString().toLowerCase() === todo.toString().toLowerCase());
    if(isTodoPresent.lenght) {
        let validationToast = document.getElementById('validation-toast');
        validationToast.innerHTML = 'todo is already there';
        validationToast.classList.add('show-toast');
        setTimeout(function(){
            validationToast.classList.remove('show-toast');
            validationToast.innerHTML = '';
        },3000);
        return;
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    return true;

}
