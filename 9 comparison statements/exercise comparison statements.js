/* Каким будет результат этих выражений? */

console.log(5 > 4);                 //true
console.log("ананас" > "яблоко");   //false
console.log("2" > "12");            //true
console.log(undefined == null);     //true
console.log(undefined === null);    //false
console.log(null == "\n0\n");   //false строка "\n0\n" сокращается до "0", т.е. не является пустой, и в итоге сравнивается null(false) == "0"(true)
console.log(null === +"\n0\n");     //false