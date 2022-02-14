"use strict"
var tasksCompleted = {
    'Anna': 100,
    'Serg': 35,
    'Elena': 120,
    'Anton': 99
};

var max = 0;
var maxName = "";

for (var key in tasksCompleted){
    if (tasksCompleted[key] > max){
        max = tasksCompleted[key];
        maxName = key;
    }
}
console.log(maxName);