'use strict';
(function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const r = 150;//радиус часов
    const rNum = 25;//радиус окружностей цифр
    const x = r; //центр
    const y = r; //центр


    setInterval(clock, 1000);

    function clock() {
        clockFace(ctx, r);
        clockCircles(ctx, r);
        clockNumbers(ctx, r);
        clockDot(ctx, r);
        tickTimer();
    }

    function clockFace(ctx, r) {
        ctx.fillStyle='#EBC167FF';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }

    function clockCircles(ctx, r) {
        for (var i = 1; i <= 12; i++) {
            var angle = i * 30 / 180 * Math.PI;
            ctx.rotate(angle);
            ctx.translate(0, -(r-30));
            ctx.rotate(-angle);
            ctx.fillStyle = '#46B93CFF';
            ctx.beginPath();
            ctx.arc(x, y, rNum, 0, 2 * Math.PI);
            ctx.fill();
            ctx.rotate(angle);
            ctx.translate(0, (r-30));
            ctx.rotate(-angle);
        }
    }

    function clockNumbers(ctx, r) {
        for (var i = 1; i <= 12; i++) {
            var angle = i * 30 / 180 * Math.PI;
            ctx.rotate(angle);
            ctx.translate(0, -(r-30));
            ctx.rotate(-angle);
            ctx.fillStyle = '#000000';
            ctx.font = '30px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.beginPath();
            ctx.fillText(i, x, y);
            ctx.fill();
            ctx.rotate(angle);
            ctx.translate(0, (r-30));
            ctx.rotate(-angle);
        }
    }

    function clockDot(ctx, r) {
        ctx.fillStyle='#000000';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }

    function clockHands(arrow, width, length) {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineWidth = width;

        ctx.moveTo(x, y);
        ctx.rotate(arrow);
        ctx.lineTo(x, -length);
        ctx.stroke();
        ctx.rotate(-arrow);
    }

    // Logic

    function tickTimer() {
        var time = new Date();
        var thisSecond = time.getSeconds();
        var thisMinute = time.getMinutes();
        var thisHour = time.getHours();
        updateWatch(thisHour, thisMinute, thisSecond);
        updateDigitalWatch(thisHour, thisMinute, thisSecond);
    }

    function updateWatch(hour, minute, second) {
        var thisSecondRotate = (second * (Math.PI / 30));
        var thisMinuteRotate = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        var thisHourRotate = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        clockHands(thisSecondRotate, 1, 180);
        clockHands(thisMinuteRotate, 3, 150);
        clockHands(thisHourRotate, 6, 150);
    }

    function updateDigitalWatch(hour, minute, second) {
        ctx.fillStyle = 'black';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText((addZeroToNumber(hour) + ':' + addZeroToNumber(minute) + ':' + addZeroToNumber(second)), r, r/1.5);
    }

    function addZeroToNumber(currentTime) {
        return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
    }
})();