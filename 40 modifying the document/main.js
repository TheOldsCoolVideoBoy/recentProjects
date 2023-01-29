"use strict";
//инициализация 

let btn = document.getElementById("button");
btn.addEventListener("click", getValue);
btn.addEventListener("click", addDiv);
div.addEventListener("click", removeHistory);
//функция которая считает

function count (x,y,op)
{
    let res;
    switch(op){   
        case "+":
            res = +x + +y;
        break;
        case "-":
            res = x - y;
        break;
        case "*":
            res = x * y;
        break;
        case "/":
            res = x / y;
        break;
    }
   return res;
}

//функция которая выводит значение
function getValue()
{
    let val1 = document.getElementById("value1").value;
    let val2 = document.getElementById("value2").value;
    let oper = document.getElementById("operator").value;

    document.getElementById("result").value=count(val1,val2,oper);
}


//функция которая выводит историю

function addDiv()
{
    let div = document.createElement('div');
    div.className = "history"
    div.innerHTML=`<strong>${document.getElementById("result").value}</strong>`;
    document.body.append(div);
    
    //функция которая удаляет элемент истории

    div.addEventListener("click", function(){
        div.remove();
    });
}

