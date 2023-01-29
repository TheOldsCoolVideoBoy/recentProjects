const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
/* const cityName = 'boston'; */
const apiKey = '2ca45d90c33bd519a67946bf2a0b4986'; 
/* const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`; */


const button = document.querySelector('.formBtn');

button.addEventListener('click', (e)=>{
  e.preventDefault();
  getWeather();
});

function getWeather(){
  const cityName = document.querySelector('.inp').value;
  if(cityName){
    sendCity(cityName);
  }
  else{
    alert("Field is empty");
  }
}
function sendCity(city){
  const url = `${serverUrl}?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(res => res.ok ? res : Promise.reject(res))
    .then(data => console.log('+', data))  
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data)
      const city = data.name;
      showCity(city);
    })
    .catch((e) =>{
      alert('Error '+e.status+" "+ e.statusText);
      console.log(e);
    } );
  }
    
function showCity(city){
  let result = document.querySelector('.cityName');
  result.textContent = `${city}`
}

function openTab(cityName,elmnt) {
  tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "white";
      tablinks[i].style.color = "black";
    }
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = 'black';
    elmnt.style.color = 'white';

  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();