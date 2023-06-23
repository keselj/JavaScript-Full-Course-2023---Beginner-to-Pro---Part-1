const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

  function addTodo() {
    // This is input element, but without vaule
    const inputElement = document.querySelector('.js-name-input');
    console.log(inputElement);
    // This is input element with value added to it in Chrome
    const name = inputElement.value;
    console.log(name);

    todoList.push(name);
    console.log(todoList);
    
    inputElement.value = '';
    
    renderTodoList();

}

