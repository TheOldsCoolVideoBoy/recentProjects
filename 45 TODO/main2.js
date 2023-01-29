/* 
нужно плясать от массива
хочу чтобы был один массив значений
по сути нужно переписать туду на массивах добавив в него листнеров и конструкторов ДОМа 

Но вопрос тогда такой, я должен ВСЁ(?!) обрабатывать через массив, рендеря его значения?

- да *гигчадЭбло

функция рендер по сути должна быть очисткой Дом дерева до дефолтного значения, и тут вопрос, что легче? просто удалять всё дом дерево заменяя его значением из другого модуля жс илиесть другой способ?

-да есть, просто удалять все узлы с нашими задачами, и снова их вставлять из массива

так... у меня две кнопки для отправки формы, по логике они должны быть независимы, но по сути можно использовать их как одну, один хуй они рендериться через рендер будут

типо я делаю при нажатии кнопки + добавление текста в массив, и в зависимости от того с какой кнопки нажато, я выбираю приоритет. 

так же у меня есть чекбокс который должен закрашивать фон таски, я должен при нажатии на неё менять статус таски.

последний интерактив это удаление таски, по нажатию на крестик.

редактирование не нужно потому что в ТЗ такого нет, но я просто воспользуюсь им для актива чекбокса.



*/
const taskList = [];

const taskStatus = {
    todo:"ToDo",
    done:"Done",
};

const taskPriority = {
    low:"Low",
    high:"High"
};

const errorList = {
    errorExist:"Task already exist.",
    errorNotExist:"Task does not exist.",
};

const formHigh = document.querySelector('.formHigh');
const formLow = document.querySelector('.formLow');
const inputHigh = document.querySelector('.inputHigh');
const inputLow = document.querySelector('.inputLow');



formHigh.addEventListener('submit', (form)=>{
    form.preventDefault();
    addTask(inputHigh.value, taskStatus.todo, taskPriority.high);
    
});

formLow.addEventListener('submit', (e)=>{
    e.preventDefault();
    addTask(inputLow.value, taskStatus.todo, taskPriority.low);
    
});

/* И ТАК мне нужно сделать хуйню для чекбокса блядль сука сколько можно
    так, блокТаск имеет этот стиль?
*/
function addTask(name, status, priority){
    
    let taskIndex = taskList.findIndex((e)=>{
       return e.name.toLowerCase() == name.toLowerCase();
    });

    if(taskIndex == -1){
        taskList.push({name, status, priority});
    }
    else{
        alert(errorList.errorExist);
    }
    render();
};

function changeTaskStatus(event){
    
    if(event.target.type == 'checkbox'){
        let searchItem = event.target.nextSibling.textContent;
        let taskId =taskList.findIndex(task => task.name === searchItem)
        alert(taskId)
        taskList[taskId].status = taskStatus.done;
        render();
    }
};
const outerBlock = document.querySelector('.outerBlock');
outerBlock.addEventListener('click', changeTaskStatus);


/* if(innerBlockTask.className === 'innerBlockTask'){
    innerBlockTask.classList.add('innerBlockTaskDone');
}
else{
    innerBlockTask.classList.remove('innerBlockTaskDone');
    innerBlockTask.classList.add('innerBlockTask');
}
 */

function deleteTask(event){
    
    if(event.target.type=='button'){
        let searchItem = event.target.previousSibling.textContent;
        let taskId =taskList.findIndex(task => task.name === searchItem)
        alert(taskId)
        taskList.splice(taskId,1);
        render();
    }
    
};
/* 
    let index = function(){
            alert(event.target.previousSibling.textContent)
        }
        alert(taskList.findIndex(index));
*/
/* event.target.previousSibling.textContent */
outerBlock.addEventListener('click', deleteTask)

function render(){
    
    document.querySelectorAll('.innerBlockTask').forEach(el => el.remove());

    for(let i = 0; i < taskList.length; i++)
    {
        if(taskList[i]===undefined){
            return
        }
        else{
            createTaskBlock(taskList[i].name, taskList[i].priority);
        }
    }
};

function createTaskBlock(textValue, priority){
    const taskBlock = document.createElement('div');
    const checkBox = document.createElement('input');
    const text = document.createElement('p');
    const button = document.createElement('button');

    checkBox.setAttribute('type', 'checkbox');
    button.textContent = '✕';
    button.setAttribute('type', 'button');
    checkBox.setAttribute('name', 'checkbox')

    taskBlock.classList.add('innerBlockTask');
    checkBox.classList.add('checkBox');
    text.classList.add('paragraph');
    button.classList.add('crossBtn');

    text.textContent = textValue

    taskBlock.append(checkBox);
    taskBlock.append(text);
    taskBlock.append(button);

    if(priority == "High"){
        document.querySelector('.innerHighBlockInput').after(taskBlock);
    }
    else{
        document.querySelector('.innerLowBlockInput').after(taskBlock);
    }
}

/* addTask("zadacha 1", taskStatus.todo, taskPriority.high); */