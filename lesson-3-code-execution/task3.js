"use strict"
var arr = [];
do {
    var num = prompt('Введите число');
    arr.push(+num);
} while (!(num === "" || num === null || !isFinite(num)));
var sum = arr.reduce((a,b) => {return a+b;});
console.log(sum);