const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '2ca45d90c33bd519a67946bf2a0b4986'; 
const button = document.querySelector('.formBtn');
const forecastServerUrl = 'http://api.openweathermap.org/data/2.5/forecast';
const favBtn = document.getElementById('likeBtn')
const favLoc = document.querySelector('.favLoc')
const cityList = [];
const cityName = document.querySelector('.cityName')

button.addEventListener('click', (e)=>{
    e.preventDefault();
    getWeatherAndForecast();
})

async function fetchWeatherAndForecast(weatherURL, forecastURL) {
    const [weatherResponse, forecastResponse] = await Promise.all([
      fetch(weatherURL),
      fetch(forecastURL)
    ]);
    const weather = await weatherResponse.json();
    const forecast = await forecastResponse.json();
    return [weather, forecast];
}

function getWeatherAndForecast(){
    const cityName = document.querySelector('.inp').value;
    const weatherUrl = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    const forecastUrl = `${forecastServerUrl}?q=${cityName}&appid=${apiKey}`;

    if(cityName){
        fetchWeatherAndForecast(weatherUrl, forecastUrl)
        .then(([weather, forecast]) => {
        console.log(weather, forecast);
        render(weather, forecast);
        })
        .catch(err => {
        console.log(err)
            alert(err.message)
        });
    }
}


function render(weatherObj, forecastObj){
    const weatherInfo = weatherObj;
    const forecastInfo = forecastObj;
    
    const nowTemp = document.querySelector('.nowTemp')
    nowTemp.textContent = (tempConvert(weatherInfo.main.temp)+'\xB0C')

    const cityName = document.querySelector('.cityName')
    cityName.textContent = weatherInfo.name.charAt(0)+weatherInfo.name.slice(1)


    const detCity = document.querySelector('.detCity')
    detCity.textContent = weatherInfo.name.charAt(0)+weatherInfo.name.slice(1)

    const detBlock = document.querySelector('.detBlock')
    while (detBlock.firstChild) {
        detBlock.removeChild(detBlock.firstChild);
    }

    const pTemp = document.createElement('p')
    const pFeel = document.createElement('p')
    const pWeather = document.createElement('p')
    const pSunr = document.createElement('p')
    const pSuns = document.createElement('p')

    pTemp.textContent = `Temperature: ${tempConvert(weatherInfo.main.temp)}\xB0C`
    pFeel.textContent = `Feels like: ${tempConvert(weatherInfo.main.feels_like)}\xB0C`
    pWeather.textContent = `Weather: ${weatherInfo.weather[0].description}`
    pSunr.textContent = `Sunrise: ${timeConvert(weatherInfo.sys.sunrise)}`
    pSuns.textContent = `Sunset: ${timeConvert(weatherInfo.sys.sunset)}`;
    
    detBlock.append(pTemp)
    detBlock.append(pFeel)
    detBlock.append(pWeather)
    detBlock.append(pSunr)
    detBlock.append(pSuns)
    /* alert(tempConvert(weatherInfo.main.temp))
    console.log(weatherInfo) */

    /*forecast*/
    const foreCity = document.querySelector('.foreCity')
    foreCity.textContent = forecastInfo.city.name.charAt(0)+forecastInfo.city.name.slice(1)

    /* 4 блока с форкастом, щас надо распарсить погоду и заебись  ЕКБ - UTC+5*/
    /*ладно похуй он сам переводит в нужное тебе время не сохраняя пояс
      щас короче удаляем все блоки с классом foreBlock
      и вставляем свои */
    
    let foreBlock = document.querySelectorAll('.foreBlock');
    foreBlock.forEach(e => e.remove());
    for(let i = 15; i>-1; i--){
      createForecast(forecastInfo, i);
    }

}

favBtn.addEventListener('click', (e) => {
  
})


function tempConvert(kelToCel){
    kelToCel = parseFloat(kelToCel);
    return (kelToCel-273.15).toFixed(2)
}

function timeConvert(msTime){
    let time = new Date(msTime * 1000);
    let hours = time.getHours();
    let minutes = '0' + time.getMinutes();
    return convTime = `${hours}:${minutes.substr(-2)}`;
}

function createForecast(forecast, iter){
  const foreBlock = document.createElement('div');
  let foreDate = document.createElement('div');
  let foreTime = document.createElement('div');
  let foreTemp = document.createElement('div');
  let foreWeath = document.createElement('div');
  let foreFeels = document.createElement('div');
  let foreImgDiv = document.createElement('div');
  let foreImg = document.createElement('img')
   
  let objDate = new Date(forecast.list[iter].dt * 1000);

  let date = `${objDate.getDate()} ${convertMonth(objDate.getMonth())}`;

  let time = timeConvert(forecast.list[iter].dt);

  foreTime.textContent = time;
  foreDate.textContent = date;

  foreTemp.textContent = `Temperature: ${tempConvert(forecast.list[iter].main.temp)}\xB0 C`;

  foreWeath.textContent = forecast.list[iter].weather[0].description;

  foreFeels.textContent =`Feels like: ${tempConvert(forecast.list[iter].main.feels_like)}\xB0 C`;

  foreImg.setAttribute('alt',`${forecast.list[iter].weather[0].description}`);

  foreImg.src = `http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`;

  foreImg.classList.add['foreBlock','img'];

  foreBlock.classList.add('foreBlock');

  foreBlock.append(foreDate)
  foreBlock.append(foreTime)
  foreBlock.append(foreTemp)
  foreBlock.append(foreWeath)
  foreBlock.append(foreFeels)
  foreBlock.append(foreImgDiv)
  foreImgDiv.append(foreImg)

    document.querySelector('.foreCity').after(foreBlock);

  

}

function convertMonth(order){
  switch(order){
    case 0:
      return 'January';
    case 1:
      return 'Febuary'
    case 2:
      return 'March'
    case 3:
      return 'April'
    case 4:
      return 'May'
    case 5:
      return 'June'
    case 6:
      return 'July'
    case 7:
      return 'August'
    case 8:
      return 'September'
    case 9:
      return 'October'
    case 10:
      return 'November'
    case 11:
      return 'December'
  }
}

/***************************************************************/
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
/**************************************************************/