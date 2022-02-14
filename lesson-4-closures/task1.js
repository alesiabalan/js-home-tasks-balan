"use strict"
var chess = "";
var row = prompt("Введите количтво строк:")
var column = prompt("Введите количтво столбцов:")
for (var r = 0; r < row; r++){
    for (var c = 0; c < column; c++){
        if (r % 2 === c % 2){
            chess = chess + "#";
        } else {
            chess = chess + " ";
        }
    }
    chess = chess + "\n";
}
console.log(chess);