const todoInput = document.getElementById('todo-input');
todoInput.addEventListener('keyup', async function(event) {
    if(event.keyCode === 13 && todoInput.value !== '') {
        console.log(todoInput.value);
        todoInput.value = '';
    }
});