const formHigh = document.querySelector('.formHigh');
const formLow = document.querySelector('.formLow');
const input = document.querySelector('.input');

formHigh.addEventListener('submit', (e)=>{
    e.preventDefault()
    createDiv()
})

function createDiv (){
    const divCheckbox = document.createElement('div')
    const checkbox = document.createElement('input')
    const p = document.createElement('p')
    const button = document.createElement('button')

    divCheckbox.classList.add('divWrapper')
    p.classList.add('par')
    button.classList.add('crossButton')

    p.textContent = input.value
    console.log(input.value)

    divCheckbox.append(checkbox)
    divCheckbox.append(p)
    divCheckbox.append(button)

    document.querySelector('.h1').append(divCheckbox)
}
