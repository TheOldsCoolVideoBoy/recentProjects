//Одни из стандартных типов данных в языке Си
//Си - строго типизируемый язык, для каждого типа значение нужно указывать соответсвующий тип
//JS- динамически типизируемый язык, любое значение можно объявить без указания типа.
let char;
char = 'A';
let int;
int = 1;
let float;
float = 1.1;
let string;
string = 'Hello';

console.log('char =', char);
console.log('int =', int);
console.log('float =', float);
console.log('string =', string);

/*В JavaScript есть два ограничения, касающиеся имён переменных:

Имя переменной должно содержать только буквы, цифры или символы $ и _.
Первый символ не должен быть цифрой. 
дефис '-' не разрешён в имени*/

let $;
$ = 'Dollar';
let _;
_ = 'Underscore';

console.log('$ =', $);
console.log('_ =', _);

//Регистр имеет значение. Переменные с именами apple и APPLE – это две разные переменные.
let apple;
apple = 1;
let APPLE;
APPLE = 2;

console.log('apple+APPLE =', apple+APPLE);

//Нелатинские буквы разрешены, но не рекомендуются
let Имя;
Имя = 'Олег';
let 我;
我 = 'Chinese symbol';

console.log('Имя =', Имя);
console.log('我 =', 我 );

//В JS существуют константные переменные которые не позволяют изменять значение переменной.
const myBirthday = '06/27/2001'
console.log('I was born on', myBirthday);

//константы в JS принято записывать в верхнем регистре

/* сниппет с сайта javasript.ru*/
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
console.log(color); // #FF7F00

/* Преимущества:
    COLOR_ORANGE гораздо легче запомнить, чем "#FF7F00".
    Гораздо легче допустить ошибку при вводе "#FF7F00", чем при вводе COLOR_ORANGE.
    При чтении кода COLOR_ORANGE намного понятнее, чем #FF7F00.
*/



