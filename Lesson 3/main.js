"use strict";

let num1 = +prompt('Введить число');
if(num1 >= 10);
console.log('Вітаю с перемогою!');


let password = +prompt('Введіть пароль');
if(password === 55555) {
    console.log('Ласкаво просимо!');
}else{
    console.log('Пароль не вірний!');
};


let hello = prompt('Ввести будь-яке повідомлення');
if(hello === '') {
    console.log('Ви нічого не написали');
}else if(hello === null){
    console.log('Відміна вводу');
}else{
    console.log(hello);
}


let num1 = +prompt('Перше число');
let num2 = +prompt('Друге число');
if(num1 > num2){
    console.log('Перше число більше');
}else if(num1 < num2){
    console.log('Друге число більше');
}else{
    if(num1 = num2)
    console.log('Числа рівні');
}


let num1 = +prompt('Ввести будь-яке число');
if(num1 % 2 === 0){
    console.log('Число парне');
}else{
    console.log('Число не парне');
}


let num1 = +prompt('Ввести номер місяця');
if(num1 >=3 && num1 <=5){
    console.log('Весна');
}else if(num1 >= 6 && num1 <= 8){
    console.log('Літо');
}else if(num1 >= 9 && num1 <= 11){
    console.log('Осінь');
}else{
    console.log('Зима');
}


let num1 = +prompt('Ввести будь-яке число')
if(num1 >= 20 && num1 <= 80){
    console.log('Число в діапазоні 20-80');
}


let num1 = +prompt('Ввести будь-яке число')
if(!(num1 < 20 || num1 > 80)){
    console.log('Число в діапазоні 20-80');
}



let num1 = prompt("Who's there?");
if(num1 == 'Cancel'){
    console.log('Canceled');
}else if(num1 == 'Other'){
    console.log("I don't know you");
}else if(num1 == 'Admin'){
    console.log(num1 = prompt('Password?'));
}else if(num1 == 'Cancel'){
    console.log('Canceled');
}if(num1 == 'Other'){
    console.log('Wrong password');
}else if(num1 == 'TheMaster'){
    console.log('Welcome!');
}