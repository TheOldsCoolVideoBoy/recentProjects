/* Строки

В JavaScript любые текстовые данные являются строками. Не существует отдельного типа «символ», который есть в ряде других языков.

Внутренний формат для строк — всегда UTF-16, вне зависимости от кодировки страницы. */



/* Кавычки

В JavaScript есть разные типы кавычек.

Строку можно создать с помощью одинарных, двойных либо обратных кавычек: */

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;


/* Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}: */

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


/* Ещё одно преимущество обратных кавычек — они могут занимать более одной строки, вот так:
 */
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // список гостей, состоящий из нескольких строк

/* 
Выглядит вполне естественно, не правда ли? Что тут такого? Но если попытаться использовать точно так же одинарные или двойные кавычки, то будет ошибка: */

/* let guestList1 = "Guests: // Error: Unexpected token ILLEGAL
  * John"; */


 /*  Обратные кавычки также позволяют задавать «шаблонную функцию» перед первой обратной кавычкой. Используемый синтаксис: func`string`. Автоматически вызываемая функция func получает строку и встроенные в неё выражения и может их обработать. Подробнее об этом можно прочитать в документации. Если перед строкой есть выражение, то шаблонная строка называется «теговым шаблоном». Это позволяет использовать свою шаблонизацию для строк, но на практике теговые шаблоны применяются редко. */


/*  Спецсимволы

Многострочные строки также можно создавать с помощью одинарных и двойных кавычек, используя так называемый «символ перевода строки», который записывается как \n: */

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList2); // список гостей, состоящий из нескольких строк

/* В частности, эти две строки эквивалентны, просто записаны по-разному: */

// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";

// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;

alert(str1 == str2); // true

/* Есть и другие, реже используемые спецсимволы. Вот список:
Символ 	Описание
\n 	Перевод строки
\r 	В текстовых файлах Windows для перевода строки используется комбинация символов \r\n, а на других ОС это просто \n. Это так по историческим причинам, ПО под Windows обычно понимает и просто \n.
\', \" 	Кавычки
\\ 	Обратный слеш
\t 	Знак табуляции
\b, \f, \v 	Backspace, Form Feed и Vertical Tab — оставлены для обратной совместимости, сейчас не используются.

Как вы можете видеть, все спецсимволы начинаются с обратного слеша, \ — так называемого «символа экранирования».

Он также используется, если необходимо вставить в строку кавычку.

К примеру: */

alert( 'I\'m the Walrus!' ); // I'm the Walrus!

/* Здесь перед входящей в строку кавычкой необходимо добавить обратный слеш — \' — иначе она бы обозначала окончание строки. */

/* Разумеется, требование экранировать относится только к таким же кавычкам, как те, в которые заключена строка. Так что мы можем применить и более элегантное решение, использовав для этой строки двойные или обратные кавычки: */

alert( `I'm the Walrus!` ); // I'm the Walrus!

/* Заметим, что обратный слеш \ служит лишь для корректного прочтения строки интерпретатором, но он не записывается в строку после её прочтения. Когда строка сохраняется в оперативную память, в неё не добавляется символ \. Вы можете явно видеть это в выводах alert в примерах выше.

Но что, если нам надо добавить в строку собственно сам обратный слеш \?

Это можно сделать, добавив перед ним… ещё один обратный слеш!
 */
alert( `The backslash: \\` ); // The backslash: \


/* Длина строки

Свойство length содержит длину строки: */

alert( `My\n`.length ); // 3

/* Обратите внимание, \n — это один спецсимвол, поэтому тут всё правильно: длина строки 3.
length — это свойство

Бывает так, что люди с практикой в других языках случайно пытаются вызвать его, добавляя круглые скобки: они пишут str.length() вместо str.length. Это не работает.

Так как str.length — это числовое свойство, а не функция, добавлять скобки не нужно. */


/* Доступ к символам

Получить символ, который занимает позицию pos, можно с помощью квадратных скобок: [pos]. Также можно использовать метод charAt: str.charAt(pos). Первый символ занимает нулевую позицию: */

let str3 = `Hello`;

// получаем первый символ
alert( str3[0] ); // H
alert( str3.charAt(0) ); // H

// получаем последний символ
alert( str3[str3.length - 1] ); // o


/* Квадратные скобки — современный способ получить символ, в то время как charAt существует в основном по историческим причинам.

Разница только в том, что если символ с такой позицией отсутствует, тогда [] вернёт undefined, а charAt — пустую строку: */

let str4 = `Hello`;

alert( str4[1000] ); // undefined
alert( str4.charAt(1000) ); // '' (пустая строка)

/* Также можно перебрать строку посимвольно, используя for..of: */

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
}


/* Строки неизменяемы

Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.

Давайте попробуем так сделать, и убедимся, что это не работает:
 */
let str = 'Hi';

str[0] = 'h'; // ошибка
alert( str[0] ); // не работает

/* Можно создать новую строку и записать её в ту же самую переменную вместо старой.

Например: */

let str = 'Hi';

str = 'h' + str[1]; // заменяем строку

alert( str ); // hi

/* В последующих разделах мы увидим больше примеров. */



/* Изменение регистра

Методы toLowerCase() и toUpperCase() меняют регистр символов: */

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

/* Если мы захотим перевести в нижний регистр какой-то конкретный символ: */

alert( 'Interface'[0].toLowerCase() ); // 'i'


/* Поиск подстроки  (как по мне просто устаревшее но встречающееся)

Существует несколько способов поиска подстроки.
str.indexOf

Первый метод — str.indexOf(substr, pos).

Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

Например: */

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

/* Необязательный второй аргумент позволяет начать поиск с определённой позиции.

Например, первое вхождение "id" — на позиции 1. Для того, чтобы найти следующее, начнём поиск с позиции 2: */

let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12

/* Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей: */

let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
}

/* Тот же алгоритм можно записать и короче: */

let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

/* str.lastIndexOf(substr, position)

Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.

При проверке indexOf в условии if есть небольшое неудобство. Такое условие не будет работать: */

let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("Совпадение есть"); // не работает
}

/* Мы ищем подстроку "Widget", и она здесь есть, прямо на позиции 0. Но alert не показывается, т. к. str.indexOf("Widget") возвращает 0, и if решает, что тест не пройден.

Поэтому надо делать проверку на -1: */

let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("Совпадение есть"); // теперь работает
}

/* Трюк с побитовым НЕ

Существует старый трюк с использованием побитового оператора НЕ — ~. Он преобразует число в 32-разрядное целое со знаком (signed 32-bit integer). Дробная часть, в случае, если она присутствует, отбрасывается. Затем все биты числа инвертируются.

На практике это означает простую вещь: для 32-разрядных целых чисел значение ~n равно -(n+1).

В частности:
 */
alert( ~2 ); // -3, то же, что -(2+1)
alert( ~1 ); // -2, то же, что -(1+1)
alert( ~0 ); // -1, то же, что -(0+1)
alert( ~-1 ); // 0, то же, что -(-1+1)

/* Таким образом, ~n равняется 0 только при n == -1 (для любого n, входящего в 32-разрядные целые числа со знаком).

Соответственно, прохождение проверки if ( ~str.indexOf("…") ) означает, что результат indexOf отличен от -1, совпадение есть.

Это иногда применяют, чтобы сделать проверку indexOf компактнее: */

let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Совпадение есть' ); // работает
}

/* Обычно использовать возможности языка каким-либо неочевидным образом не рекомендуется, но этот трюк широко используется в старом коде, поэтому его важно понимать.

Просто запомните: if (~str.indexOf(…)) означает «если найдено».

Впрочем, если быть точнее, из-за того, что большие числа обрезаются до 32 битов оператором ~, существуют другие числа, для которых результат тоже будет 0, самое маленькое из которых — ~4294967295=0. Поэтому такая проверка будет правильно работать только для строк меньшей длины.

На данный момент такой трюк можно встретить только в старом коде, потому что в новом он просто не нужен: есть метод .includes (см. ниже). */


/* includes, startsWith, endsWith (Более современный и удобный способ)

Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.

Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но позиция не нужна: */

alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

/* Необязательный второй аргумент str.includes позволяет начать поиск с определённой позиции: */

alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

/* Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
 */
alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"



/* Получение подстроки

В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.

str.slice(start [, end])

    Возвращает часть строки от start до (не включая) end.

    Например: */

let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );

/* Если аргумент end отсутствует, slice возвращает символы до конца строки: */

let str = "stringify";
alert( str.slice(2) ); // ringify, с позиции 2 и до конца

/* Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки:
 */
    let str = "stringify";

    // начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
    alert( str.slice(-4, -1) ); // gif

str.substring(start [, end])

   /*  Возвращает часть строки между start и end (не включая) end.

    Это — почти то же, что и slice, но можно задавать start больше end.
    Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.

    Например: */

    let str = "stringify";

    // для substring эти два примера — одинаковы
    alert( str.substring(2, 6) ); // "ring"
    alert( str.substring(6, 2) ); // "ring"

    // …но не для slice:
    alert( str.slice(2, 6) ); // "ring" (то же самое)
    alert( str.slice(6, 2) ); // "" (пустая строка)

   /*  Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0.
str.substr(start [, length]) */

   /*  Возвращает часть строки от start длины length.

    В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции:
 */
let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );

/* Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца: */

    let str = "stringify";
    // gi, получаем 2 символа, начиная с позиции 4 с конца строки
    alert( str.substr(-4, 2) );
/* 
    Этот метод находится в Annex B спецификации языка. Это означает, что его должны поддерживать только браузерные движки JavaScript, и использовать его не рекомендуется. Но на практике он поддерживается везде.

Давайте подытожим, как работают эти методы, чтобы не запутаться:
метод 	выбирает… 	отрицательные значения
slice(start, end) 	от start до end (не включая end) 	можно передавать отрицательные значения
substring(start, end) 	между start и end 	отрицательные значения равнозначны 0
substr(start, length) 	length символов, начиная от start 	значение start может быть отрицательным
Какой метод выбрать?

Все эти методы эффективно выполняют задачу. Формально у метода substr есть небольшой недостаток: он описан не в собственно спецификации JavaScript, а в приложении к ней — Annex B. Это приложение описывает возможности языка для использования в браузерах, существующие в основном по историческим причинам. Таким образом, в другом окружении, отличном от браузера, он может не поддерживаться. Однако на практике он работает везде.

Из двух других вариантов, slice более гибок, он поддерживает отрицательные аргументы, и его короче писать. Так что, в принципе, можно запомнить только его. */
