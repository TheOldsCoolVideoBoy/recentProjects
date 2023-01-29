function foo (x, y, op){
    let res;
    switch(op){
        case "+":
            res = +x + +y;
        break;
        case "-":
            res = +x - +y;
        break;
        case "*":
            res = +x * +y;
        break;
        case "/":
            res = +x / +y;
        break;
    }
    document.getElementById('result').value = res;
}