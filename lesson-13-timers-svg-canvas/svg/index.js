'use strict';
(function() {
    const baseRadius = 300; //радиус циферблата
    const numbersBaseRadius = baseRadius / 2.5; //радиус оси цифр циферблата
    const circleRadius = 25; // радиус кружков с цифрами
    const dotSize = 8; //размер точки в центре часов
    const wrapper = document.getElementById('wrapper');

    wrapper.appendChild(createWatch());
    setInterval(tickTimer, 1000);

    function createWatch() {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svg.setAttribute('width', baseRadius);
        svg.setAttribute('height', baseRadius);
        wrapper.appendChild(svg);

        var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute('cx', baseRadius / 2);
        circle.setAttribute('cy', baseRadius / 2);
        circle.setAttribute('r', baseRadius / 2);
        circle.setAttribute('fill', '#EBC167FF');
        svg.appendChild(circle);

        svg.appendChild(createClockFace());
        svg.appendChild(createHand('hours', 6, 90));
        svg.appendChild(createHand('minutes', 3, 80));
        svg.appendChild(createHand('seconds', 1, 70));
        svg.appendChild(createDecorativeDot(dotSize));
        svg.appendChild(createDigitalWatch());
        return svg;
    }

    function createClockFace() {
        var clockFace = document.createDocumentFragment();
        for (var i = 1; i <= 12; i++) {
            var angle = i * 30 / 180 * Math.PI;
            var x = (baseRadius / 2) + Math.round(Math.sin(angle) * numbersBaseRadius);
            var y = (baseRadius / 2) - Math.round(Math.cos(angle) * numbersBaseRadius);
            clockFace.appendChild(createCircle(x, y, circleRadius));
            clockFace.appendChild(createNumber(x, y, i));
        }
        return clockFace;
    }

    function createCircle(circleX, circleY, circleRadius) {
        var clockFace = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        clockFace.setAttribute('cx', circleX);
        clockFace.setAttribute('cy', circleY);
        clockFace.setAttribute('r', circleRadius);
        clockFace.setAttribute('fill', '#46B93CFF');
        return clockFace;
    }

    function createNumber(circleX, circleY, number) {
        var hourNumber = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        hourNumber.setAttribute('x', circleX);
        hourNumber.setAttribute('y', circleY);
        hourNumber.setAttribute('text-anchor', 'middle');
        hourNumber.setAttribute('dominant-baseline', 'central');
        hourNumber.setAttribute('font-size', '24');
        hourNumber.textContent = number;
        return hourNumber;
    }

    function createHand(handType, handWidth, lineEnd) {
        var hand = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        var lineStart = baseRadius / 2;
        hand.setAttribute('x1', lineStart);
        hand.setAttribute('x2', lineEnd);
        hand.setAttribute('y1', lineStart);
        hand.setAttribute('y2', lineEnd);
        hand.setAttribute('id', handType);
        hand.setAttribute('stroke', 'black');
        hand.setAttribute('stroke-width', handWidth);
        hand.setAttribute('transform-origin', `${lineStart}`);
        return hand;
    }

    function createDecorativeDot(dotSize) {
        var dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        dot.setAttribute('cx', baseRadius / 2);
        dot.setAttribute('cy', baseRadius / 2);
        dot.setAttribute('r', dotSize);
        dot.setAttribute('fill', 'black');
        return dot;
    }

    function createDigitalWatch() {
        var textClock = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        textClock.setAttribute('x', (baseRadius / 2 - baseRadius / 6));
        textClock.setAttribute('y', (baseRadius / 2 - baseRadius / 6));
        textClock.setAttribute('font-size', '28');
        textClock.setAttribute('id', 'digit');
        return textClock;
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
        var thisSecondRotate = (second / 60) * 360 - 90;
        var thisMinuteRotate = (minute) / 60 * 360 - 90;
        var thisHourRotate = (hour + minute / 60) / 12 * 360 - 90;
        rotateHandle('seconds', thisSecondRotate);
        rotateHandle('minutes', thisMinuteRotate);
        rotateHandle('hours', thisHourRotate);
    }

    function rotateHandle(handle, degree) {
        var arrow = document.getElementById(`${handle}`);
        arrow.setAttribute('transform', `rotate(${degree})`);
    }

    function updateDigitalWatch(hour, minute, second) {
        var digitalWatch = document.getElementById('digit');
        digitalWatch.textContent = `${addZeroToNumber(hour)}:${addZeroToNumber(minute)}:${addZeroToNumber(second)}`;
    }

    function addZeroToNumber(currentTime) {
        return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
    }
})();