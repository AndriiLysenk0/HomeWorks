"use strict";

function sum(num1, num2) {
    return num1 + num2;
}


let result = sum(3, 2);
console.log(result);


function multBy5(num) {
    let result = 5 * num;
    console.log(`5 * ${num} = ${result}`);
}

multBy5(1);


function max(num1, num2) {
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
let result = max(5, 10);
console.log(result);


function pow(x, n) {
if (isNaN(x) || isNaN(n)){
    return 9;
}
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}

let result = pow (3, 3);
console.log(result);



function sumOrConcatination(value1, value2) {
  if (value1 === undefined && value2 === undefined) {
    return "Результат суми: 30";
  } else if (typeof value1 === "string" || typeof value2 === "string") {
    return `Результат конкатенації: ${value1}${value2}`;
  } else if (!isNaN(value1) && !isNaN(value2)) {
    return `Результат суми: ${value1 + value2}`;
  } else {
    return "Некоректні аргументи";
  }
}
let result = sumOrConcatination();
console.log(result);


function fib (num) {
    let a = 1;
    let b = 1;
    let i = 1;
    while (i < num) {
        let c = a + b;
        a = b;
        b = c;
        i++;
    }return a;
}

let num = 9;
let result = fib(num);
console.log(`fib ${num} = ${result}`);