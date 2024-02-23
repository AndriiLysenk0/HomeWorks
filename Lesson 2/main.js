let num1 = +prompt('Число1');
let num2 = +prompt('Число2');

let rem = num1 % num2;
let pow = num1 ** num2;
console.log('Залишок від ділення ' + num1 + ' на ' + num2 + ' дорівнює ' + rem);
console.log('Результат зведення ' + num1 + ' на ' + num2 + ' дорівнює ' pow)


let num = 14;
//num = num + 5;
num += 5;
num -= 2;
num *= 2;
++num;
++num;
++num;
console.log(num);
//num=37


let num = 6;
num %= 3;

let num2 = 7;
num2 %= 3

let num3 = 12;
num3 %= 5

console.log(num);
console.log(num2);
console.log(num3);


let age = +prompt('Ваш вік?');
console.log(age>=18);


let x =prompt("enter x");
let y =prompt("enter y");
x = x + y;
y = x - y;
x = x - y;
console.log(x);
console.log(y);
