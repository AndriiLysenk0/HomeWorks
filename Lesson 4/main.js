"use strict"

let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

let message = (num1 > num2) ? " 1 bilshe" : (num1 < num2) ? "2 bilshe" : "rivni";
console.log(message);


let key = prompt('ввести будь-яке повідомлення');

switch (key) {
    case null:
        console.log('Відміна вводу');
        break;
    case "":
        console.log('Ви нічого не написали');
        break;
    default:
     console.log(key);
        break;
}


let num1 = +prompt('Ввести номер місяця');
switch (num1) {
    case 1:
    case 2:
    case 12:
        console.log('Зима')
        break;    
    
    case 3:
        console.log('Весна')
        break;
    case 4:
        console.log('Весна')
        break;
    case 5:
        console.log('Весна')
        break;
    case 6:
        console.log('Літо')
        break;
    case 7:
        console.log('Літо')
        break;
    case 8:
        console.log('Літо')
        break;
    case 9:
        console.log('Осінь')
        break;
    case 10:
        console.log('Осінь')
        break;
    case 11:
        console.log('Осінь')
        break;

    default:
        console.log('Некоректний номер місяця')
        break;    
}



for (let n = 0; n < 11; n++) {
    console.log(n);
}

let num1 = 0;
while(num1 !== 11) {
    console.log(num1);
    num1 ++
}



let start = prompt("Введіть перше число:");
let finish = prompt("Введіть друге число:");

for (let n = start; n <= finish; n++) {    
    if(n % 5 === 0){
        console.log(n);
    }
}


let m = start
while(m <= finish) {
    if(m % 5 === 0){
        console.log(m);
    }
    m++
}


for (let i = 1; i <= 10; i++) {
    console.log(`3 помножити на ${i} дорівнює ${3 * i}`);
}

let i = 1
while (i <= 10) {
    console.log(`3 помножити на ${i} дорівнює ${3 * i}`);
    i++;
}



let sum = 0
for (let n = 1; n <= 5; n++){
    let num = +prompt(`Введіть число ${n}`)
    sum = sum + num;
}
console.log(sum);



let num = +prompt('Виведіть факторіал числа');
let i = 1
let res = 1
while (i < num) {
    i++;
    res = res * i;
}
console.log(`Факторіал ${num} = ${res} `);



let numberOfRows = prompt("Введіть кількість рядків:");

if (!isNaN(numberOfRows) && numberOfRows > 0) {
    for (let i = 1; i <= numberOfRows; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}