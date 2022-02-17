"use strict"
var john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calc: function () {
        this.tips = [];
        this.pay = [];
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
            this.pay[i] = +tip.toFixed(1) + this.bills[i];
        }
    }
}
john.calc();
console.log(john.tips);
console.log(john.pay);