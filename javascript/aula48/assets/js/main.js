const taskInput = document.querySelector('.new-task-input');
const taskBtn = document.querySelector('.new-task-btn');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(input){
    const li = createLi();
    li.innerHTML = input;
    tasks.appendChild(li);
    createDeleteBtn(li);
    saveTasks();
}

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        tasksList.push(taskText);
    }

    const tasksJSON = JSON.stringify(tasksList);
    localStorage.setItem('tarefas', tasksJSON);

}

function clearInput(){
    taskInput.value = ''
    taskInput.focus();
}

function createDeleteBtn(li){
    li.innerText += ' '
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Apagar';
    deleteBtn.setAttribute('class', 'delete-btn');
    li.appendChild(deleteBtn);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tarefas');
    const taskList = JSON.parse(tasks);
    console.log(taskList)

    for (let task of taskList) {
        createTask(task);
    }
}

addSavedTasks();

taskBtn.addEventListener('click', (e)=>{
    if(!taskInput.value) return;
    createTask(taskInput.value);
});

taskInput.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        createTask(taskInput.value);        
        clearInput();
    }
});

document.addEventListener('click', (e)=>{
    const el = e.target;
    if(el.classList.contains('delete-btn')) {
        el.parentElement.remove();
        saveTasks();
    }
});

