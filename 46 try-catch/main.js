const taskList = []

const taskStatus = {
    todo: "ToDo",
    done: "Done",
}

const taskPrior = {
    low:"Low",
    high:"High",
}
/*
удалил объект ошибок 
 */

const inputHigh = document.querySelector('.inputHigh');
const inputLow = document.querySelector('.inputLow');
const formHigh = document.querySelector('.formHigh');
const formLow = document.querySelector('.formLow');

const outerBlock = document.querySelector('.outerBlock');

/*******************************************************/

outerBlock.addEventListener('change', changeTask);
outerBlock.addEventListener('click', deleteTask);

/* заменил ошибку пустого ввода в верхней форме */
formHigh.addEventListener('submit', (form)=>{
    form.preventDefault();
    try{
        addTask(inputHigh.value, taskStatus.todo, taskPrior.high);

        if(inputHigh.value === ""){
            throw new Error("Input field is empty!");
        }
    }
    catch(e){
        alert(e.message);
    }
})

/* 
formHigh.addEventListener('submit', (form)=>{
    form.preventDefault();
    if(inputHigh.value === ""){
        alert(errorList.errEmpty);
    }
    else{
        addTask(inputHigh.value, taskStatus.todo, taskPrior.high);
    }
}) */
/* заменил ошибку пустого ввода в нижней форме */
formLow.addEventListener('submit', (form)=>{
    form.preventDefault();
    try{
        addTask(inputHigh.value, taskStatus.todo, taskPrior.low);

        if(inputHigh.value === ""){
            throw new Error("Input field is empty!");
        }
    }
    catch(e){
        alert(e.message);
    }
})

/* formLow.addEventListener('submit', (form)=>{
    form.preventDefault();
    if(inputLow.value === ""){
        alert(errorList.errEmpty);
    }
    else{
        addTask(inputLow.value, taskStatus.todo, taskPrior.low);
    }
}) */

/* заменил ошибку сущ. задачи при добавлении */

function addTask(name, status, priority){
     try{
        let taskIndex = taskList.findIndex((e)=>{
            return e.name.toLowerCase() == name.toLowerCase();
         });
        
        taskList.push({name, status, priority});
        if(taskIndex == -1){
            throw new Error("Task already exist!")
        }
     }
     catch(e){
        alert(e.message);
     }
     render();
}

/* 
function addTask(name, status, priority){
    let taskIndex = taskList.findIndex((e)=>{
        return e.name.toLowerCase() == name.toLowerCase();
     });
 
     if(taskIndex == -1){
         taskList.push({name, status, priority});
     }
     else{
         alert(errorList.errExist);
     }
     render();
} */

function changeTask(event){
    if(event.target.type == 'checkbox'){
        let searchItem = event.target.nextSibling.textContent;
        let taskId =taskList.findIndex(task => task.name === searchItem)
        if(taskList[taskId].status == taskStatus.done){
            taskList[taskId].status = taskStatus.todo;
        }
        else{
            taskList[taskId].status = taskStatus.done;
        }
        
        render();
    }
}

function deleteTask(event){
    if(event.target.type=='button'){
        let searchItem = event.target.previousSibling.textContent;
        let taskId =taskList.findIndex(task => task.name === searchItem)
        taskList.splice(taskId,1);
        render();
    }
}

function render(){
    document.querySelectorAll('.innerBlockTask').forEach(el => el.remove());
    document.querySelectorAll('.innerBlockTaskDone').forEach(el => el.remove());

    for(let i = 0; i < taskList.length; i++)
    {
        if(taskList[i]===undefined){
            return
        }
        else{
            taskBlockTemplate(taskList[i].name, taskList[i].status, taskList[i].priority);
        }
    }

}

function taskBlockTemplate(textValue,  statusOfTask, priority){
    const taskBlock = document.createElement('div');
    const checkBox = document.createElement('input');
    const text = document.createElement('p');
    const button = document.createElement('button');

    checkBox.setAttribute('type', 'checkbox');
    button.textContent = '✕';
    button.setAttribute('type', 'button');
    checkBox.setAttribute('name', 'checkbox')

    if(statusOfTask == taskStatus.todo){
        taskBlock.classList.add('innerBlockTask');
        checkBox.checked = false;
    }
    else{
        taskBlock.classList.add('innerBlockTaskDone');
        checkBox.checked = true;
    }
    
    checkBox.classList.add('checkBox');
    text.classList.add('paragraph');
    button.classList.add('crossBtn');

    text.textContent = textValue

    taskBlock.append(checkBox);
    taskBlock.append(text);
    taskBlock.append(button);

    if(priority == taskPrior.high){
        document.querySelector('.innerHighBlockInput').after(taskBlock);
    }
    else{
        document.querySelector('.innerLowBlockInput').after(taskBlock);
    }
}



