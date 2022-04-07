'use strict';
(function() {
    const radiusWatch = 120;
    const radiusElWatch = 70;
    const angleBetweenNum = 30;

    var wrapper = document.getElementById('wrapper');
    var centerX = wrapper.offsetWidth / 2;
    var centerY = wrapper.offsetHeight / 2;

    var elWatch = document.createElement("div");
    var hourHand = document.createElement("div");
    var minuteHand = document.createElement("div");
    var secondHand = document.createElement("div");

    var angleCount = 0;

    for (var i = 1; i <= 12; i++) {
        var circleNumber = document.createElement("div");
        var circleNumberCenterX;
        var circleNumberCenterY;

        angleCount += angleBetweenNum;
        var angleRad = angleCount * Math.PI / 180;

        circleNumber = wrapper.appendChild(circleNumber);
        circleNumber.classList.add('circleNumbers');
        circleNumber.innerHTML = i;

        circleNumberCenterX = centerX + radiusWatch * Math.sin(angleRad);
        circleNumberCenterY = centerY - radiusWatch * Math.cos(angleRad);

        circleNumber.style.left = Math.round(circleNumberCenterX - circleNumber.offsetWidth / 2) + "px";
        circleNumber.style.top = Math.round(circleNumberCenterY - circleNumber.offsetHeight / 2) + "px";
    };

    elWatch = wrapper.appendChild(elWatch);
    hourHand = wrapper.appendChild(hourHand);
    minuteHand = wrapper.appendChild(minuteHand);
    secondHand = wrapper.appendChild(secondHand);

    elWatch.classList.add('elWatch');
    hourHand.classList.add('hourHand');
    minuteHand.classList.add('minuteHand');
    secondHand.classList.add('secondHand');

    elWatch.style.left = centerX - elWatch.offsetWidth / 2 + "px";
    elWatch.style.top = centerY - radiusElWatch + "px";

    hourHand.style.left = centerX - hourHand.offsetWidth / 2 + "px";
    hourHand.style.top = centerY - hourHand.offsetHeight + 10 + "px";

    minuteHand.style.left = centerX - minuteHand.offsetWidth / 2 + "px";
    minuteHand.style.top = centerY - minuteHand.offsetHeight + 10 + "px";

    secondHand.style.left = centerX - secondHand.offsetWidth / 2 + "px";
    secondHand.style.top = centerY - secondHand.offsetHeight + 10 + "px";

    hourHand.style.transformOrigin = "center 50px";
    minuteHand.style.transformOrigin = "center 110px";
    secondHand.style.transformOrigin = "center 135px";

    function runningClock() {
        var time = new Date;
        elWatch.innerHTML = time.toLocaleTimeString();

        var hours = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
        var minutes = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
        var seconds = 6 * time.getSeconds() - 6;

        seconds += 6;
        minutes += 6 * (1 / 60);
        hours += 6 * (1 / 360);

        hourHand.style.transform = "rotate(" + hours + "deg)";
        minuteHand.style.transform = "rotate(" + minutes + "deg)";
        secondHand.style.transform = "rotate(" + seconds + "deg)";
    };

    window.onload = runningClock();
    window.setInterval(runningClock, 1000);
})();