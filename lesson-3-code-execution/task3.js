"use strict"
var arr = [];
do {
    var num = prompt('Введите число');
    if (num === "" || num === null || !isFinite(num)) break;
    arr.push(+num);
} while (true)
var sum = arr.reduce((a,b) => a+b);
console.log(sum);