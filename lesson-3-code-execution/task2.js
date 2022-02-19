"use strict"
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(x){
    for (var key in x) {
        if (typeof x[key] === "number"){
            x[key] = x[key]*2;
        }
    }
    console.log(x);
}

multiplyNumeric(image);