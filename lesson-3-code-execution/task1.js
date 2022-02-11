"use strict"
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var max = 0;
var maxName = "";

for (var key in tasksCompleted){
    max = Math.max(tasksCompleted[key]);
    maxName = key;
}
console.log(maxName);