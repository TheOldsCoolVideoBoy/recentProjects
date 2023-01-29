const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';

const apiKey = '2ca45d90c33bd519a67946bf2a0b4986'; 

let weatherObject = {};

const button = document.querySelector('.formBtn');

button.addEventListener('click', (e)=>{
  e.preventDefault();
  getWeather();
});

function getWeather(){
  const cityName = document.querySelector('.inp').value;
  if(cityName){
    weatherObject = sendCity(cityName);
    
  }
  else{
    alert("Field is empty");
  }
}
function sendCity(city){
  const url = `${serverUrl}?q=${city}&appid=${apiKey}`;
  return fetch(url).then(response =>{
    if(response.ok){
      showCity(city);
      return response.json()
    }
    else{
      return response.json().then(error=>{
        const e = new Error('Something went wrong')
        e.data = error
        alert(error.message)
        throw e
      })
    }
  })
}

/* тык-> получить инфу из тыка -> отправить запрос -> распарсить инфу */
    
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

/* Now:
•Температура
•значок погоды
•название города
○значок фав

	Details:
	•Город
	•Температура
	•ощущения
	•Погода
	•рассвет
	•закат

    Forecast:
    •Город
    (и тут нужно хитровыебнуться с шаблоном и не выёбываться переписывая его каждый раз, вижу его в неком цикле, где мы берём время и просто генерируем 4 значения с шагом 3 часа)
    •Шаблон:
    •дата
    •время
    •температура
    •ощущения
    •значок погоды
 */

    