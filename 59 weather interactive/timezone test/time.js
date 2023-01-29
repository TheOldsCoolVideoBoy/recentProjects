
const mainBlock = document.createElement('div')
const currentTimeP = document.createElement('p')
const currentTimeZoneP = document.createElement('p')
const serverTimeP = document.createElement('p')
const serverTimeZoneP = document.createElement('p')


/*  
    я получаю часовую зону в ЮТС
    мне нужно увидеть время искомого города по местнуому времени
    типа получаю местную часовую зону владельца пк
    и прибавляю её к тайм зоне полученного значения
    
    1 получить местное время
    2 взять из неё тайм зону
    3. прибавить её к полученному значению с сервера
*/

let currentTime = new Date()
let foo = currentTime - new Date(0)
console.log(foo)
let serverTime = 1674398588 *1000
let serTime = new Date(serverTime)

currentTimeP.textContent = currentTime;
currentTimeZoneP.textContent = "Current time zone from UTC: "+currentTime.getTimezoneOffset()/60;
serverTimeP.textContent = serTime.toString()
serverTimeZoneP.textContent = serTime.getTimezoneOffset() / 60;


mainBlock.append(currentTimeP);
mainBlock.append(currentTimeZoneP);
mainBlock.append(serverTimeP);
mainBlock.append(serverTimeZoneP);
document.body.append(mainBlock)