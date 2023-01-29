/*
Задание

Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. Чтобы получилось вот так:

showVerticalMessage('strada')
S
t
r
a
d
a

Если строка начинается с буквы "s" - нужно вывести эту строку с первой заглавной буквой

Если строка больше 7 символов - вывести только первые 7 */

let message = "Netherlands"; 

function verStr(str)
{
    let tmp = str;
    if(str[0] === 'S' )
    {
        tmp = str[0].toUpperCase() + str.slice(1);
    }

    if(str.length > 7)
    {
        tmp = tmp.slice(0, 7);
    }

    for(let char of tmp)
    {
        console.log(char);
    }
}

verStr(message);