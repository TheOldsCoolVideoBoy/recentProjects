//Выведется ли alert?

if ("0") { //строка не пуста - значение истинно
  console.log( 'Привет' );
}

/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */


let name = prompt("Какое «официальное» название JavaScript?", "");

if(name == "ECMAScript")
{
    console.log("Верно!");
}
else
{
    console.log("Не знаете? ECMAScript!");
}
