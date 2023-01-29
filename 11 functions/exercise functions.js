/* Создать простой калькулятор с именем сalc, который будет принимать значение a и значение b, а так же идентификатор нужного действия.

Пример вызова такой функции calc
сalc(‘add’, 1, 2) - возвращает 3
сalc(‘multi’, 1, 2) - возвращает 2
сalc(’subtract’, 3, 2) - возвращает 1
Делить пока ничего не надо.  */

//вызов функции calc
let result = calc('substract', 5, 6);

//объявление функции calc
function calc(action, a, b)
{
    if(action === 'add')
    {
        return a + b;
    }
    else if(action === 'multi')
    {
        return a * b;
    }
    else if(action === 'substract')
    {
        return a - b;
    }
}

//вывод результата
console.log(result);

