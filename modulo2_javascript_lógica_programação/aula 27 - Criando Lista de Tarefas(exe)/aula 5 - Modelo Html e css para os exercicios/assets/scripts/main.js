const inputTask = document.querySelector(".input-tarefas")
const btnTask= document.querySelector(".btn-tarefas")
const tasks = document.querySelector(".tarefas")

const createli = () =>{
    const li = document.createElement('li')
    return li
}
const createButtonClear = (li) =>{
    li.innerText += ' '
    const buttonClear = document.createElement('button')
    buttonClear.innerText = 'Apagar'
    //buttonClear.classList.add('apagar')
    buttonClear.setAttribute('class', 'Apagar')
    li.appendChild(buttonClear)
} 
const createTask = (task)=>{
    const li = createli()
    li.innerText = task
    tasks.appendChild(li)
    clearInput()
    createButtonClear(li)
    saveTasks()
}

const addSaveTasks = () => {
    const tasks = localStorage.getItem("tasks")
    const listenTasks = JSON.parse(tasks)
    for (let task of listenTasks){
        createTask(task)
    } 
}

const clearInput = () =>{
    inputTask.value = ''
    inputTask.focus()
}
//evento key press para criar a tarefa pelo teclado
inputTask.addEventListener('keypress', (e)=>{
    if(e.code === "Enter"){
        createTask(inputTask.value)
    }
})

//evento click do botão para criar a  tarefa
btnTask.addEventListener('click', ()=>{
    if(!inputTask.value)return
    createTask(inputTask.value)
    
})

//evento de remover do apagar
document.addEventListener('click', (e)=>{
    const element = e.target

    if (element.classList.contains('Apagar')){
        element.parentElement.remove()
        saveTasks()
    }
})

//salvar as tasks 
const saveTasks = () => {
    const liTasks = tasks.querySelectorAll('li')
    const listTasks = []

    for (let task of liTasks){
        let tasksText =  task.innerText
        tasksText = tasksText.replace('Apagar', '').trim()
        listTasks.push(tasksText)
        const taskJSON = JSON.stringify(listTasks) 
        localStorage.setItem("tasks", taskJSON )
    }
    
}

addSaveTasks()