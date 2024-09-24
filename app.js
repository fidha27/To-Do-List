//selectors
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');

//event-Listner

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deletecheck)


//function

function addTodo(event){
  event.preventDefault();
  //to prevent  from referesh

  //add todo DIv
  const todoDiv=document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo=document.createElement("li");
  newTodo.innerText=todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //check mark button

  const completedButton=document.createElement('button');
  completedButton.innerHTML='<i class="fas fa-check" ></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  //check trash button
  const trashButton=document.createElement('button');
  trashButton.innerHTML='<i class="fas fa-trash" ></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
      //append the list
      todoList.appendChild(todoDiv);

      //clear input value
      todoInput.value="";


}
function deletecheck(e)
{
  const item =e.target;
  //delete to do
  if(item.classList[0]==='trash-btn')
  {
    const todo =item.parentElement;
    //animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend',function()
  {
    todo.remove();
  });
  //todo.remove();
  }
  if(item.classList[0]==='complete-btn')
  {
    const todo=item.parentElement;
    todo.classList.toggle('completed');
  }
  
}