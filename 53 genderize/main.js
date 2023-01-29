const Url = "https://api.genderize.io";
const button = document.querySelector('.btn');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    getName();
});

function getName(){
    const Name = document.querySelector('.inp').value;
    if(Name){
        sendName(Name);
    }
    else{
        alert("Field is empty");
    }
}

function sendName(name){
    const url = `${Url}?name=${name}`;
    const response = fetch(url);
        response
            .then((resp)=> resp.json())
            .then((value) =>{
                const gender = value.gender;
                showGender(gender, name);
            });
   
}

function showGender(gender, name){
    let result = document.querySelector('.response');
    result.textContent = `${name} is ${gender}`;
}

