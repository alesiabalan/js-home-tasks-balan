"use strict"
var john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calc: function () {
        this.tips = [];
        for (var i = 0; i < this.bills.length; i++) {
            var tip = 0;
            if (this.bills[i] <= 50){
                tip = this.bills[i] * 0.2;
            } else if (this.bills[i] > 50 && this.bills[i] <= 200){
                tip = this.bills[i] * 0.15;
            } else {
                tip = this.bills[i] * 0.1;
            }
            this.tips[i] = +tip.toFixed(1);
        }
    }
}
var mark = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    calc: function () {
        this.tips = [];
        for (var i = 0; i < this.bills.length; i++) {
            var tip = 0;
            if (this.bills[i] <= 100){
                tip = this.bills[i] * 0.2;
            } else if (this.bills[i] > 100 && this.bills[i] <= 300){
                tip = this.bills[i] * 0.1;
            } else {
                tip = this.bills[i] * 0.25;
            }
            this.tips[i] = +tip.toFixed(1);
        }
    }
}
john.calc();
mark.calc();
function mean(arr) {
    return +((arr.reduce((a, b) => a + b))/arr.length).toFixed(1);
}
if (mean(john.tips) > mean(mark.tips)) {
    console.log('John\'s family paid the highest tips on average.');
} else {
    console.log('Mark\'s family paid the highest tips on average.');
}