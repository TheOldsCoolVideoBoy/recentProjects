const requestURL = "http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=2ca45d90c33bd519a67946bf2a0b4986";

function sendRequest(method, url){
    return fetch(url).then(response =>{
        if(response.ok){
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

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => {
        alert(err.message)
        console.log(err)
    })