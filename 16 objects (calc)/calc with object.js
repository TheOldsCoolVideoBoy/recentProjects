const operations = 
{
  add : "+",
  sub : "-",
  multi : "*",
}

let result1 = calc("+", 1, 2)
let result2 = calc("-", 4, 3)
let result3 = calc("*", 5, 6)


function calc (operation, a, b)
{
    switch(operation)
    {
        
        case operations.add:  
            return a+b;
        case operations.sub:
            return a-b;
        case operations.multi:
            return a*b;
        default:
            console.log("I can't do it");
            break;
    }
}

console.log(result1);
console.log(result2);
console.log(result3);