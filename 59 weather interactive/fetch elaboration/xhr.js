const requestURL = "http://api.openweathermap1.org/data/2.5/weather?q=Boston&appid=2ca45d90c33bd519a67946bf2a0b4986";

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url)

        xhr.responseType = 'json';

        xhr.onload = () =>{
        if (xhr.status >= 400){
            reject(xhr.response)
            alert("Произошла ошибка! XHR response: " + xhr.response.cod + " "+ xhr.response.message)
        }
        else{
            resolve(xhr.response)
        }

        }
        xhr.onerror = () =>{
            reject(xhr.response)
        alert("Ошибка связи с сервером. XHR respose: "+xhr.response);
        }

        xhr.send()
    })
    
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))