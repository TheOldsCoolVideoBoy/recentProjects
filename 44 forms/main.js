const formHigh = document.querySelector('.formHigh');
const formLow = document.querySelector('.formLow');
const inputHigh = document.querySelector('.inputHigh');
const inputLow = document.querySelector('.inputLow');

formHigh.addEventListener('submit', (e)=>{
    e.preventDefault()
    createHighTask()
})

function createHighTask(){
    const taskBlock = document.createElement('div');
    const checkbox = document.createElement('input');
    const par = document.createElement('p');
    const button = document.createElement('button');

    checkbox.setAttribute('type','checkbox');
    button.textContent = '✕';

    taskBlock.classList.add('innerBlockTask');
    checkbox.classList.add('checkBox');
    par.classList.add('paragraph');
    button.classList.add('crossBtn');

    par.textContent = inputHigh.value;
    console.log(inputHigh.value);

   
    taskBlock.append(par);
    taskBlock.append(button);

    document.querySelector('.innerHighBlockInput').after(taskBlock);
}

formLow.addEventListener('submit', (e)=>{
    e.preventDefault()
    createLowTask()
})

function createLowTask(){
    const taskBlock = document.createElement('div');
    const checkbox = document.createElement('input');
    const par = document.createElement('p');
    const button = document.createElement('button');

    checkbox.setAttribute('type','checkbox');
    button.textContent = '✕';

    taskBlock.classList.add('innerBlockTask');
    checkbox.classList.add('checkBox');
    par.classList.add('paragraph');
    button.classList.add('crossBtn');

    par.textContent = inputLow.value;
    console.log(inputLow.value);

    taskBlock.append(checkbox);
    taskBlock.append(par);
    taskBlock.append(button);

    document.querySelector('.innerLowBlockInput').after(taskBlock);
}