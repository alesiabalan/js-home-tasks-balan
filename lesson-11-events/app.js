'use strict';
(function() {

    var DragImage = null;
    var DragShiftX;
    var DragShiftY;

    var list = document.getElementById("list");
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("mousedown", DragStart, false);
    };

    function DragStart(EO) {
        EO = EO || window.event;
        EO.preventDefault();

        DragImage = EO.target;

        list.appendChild(DragImage);
        DragImage.style.position = "absolute";

        var MouseX = EO.pageX;
        var MouseY = EO.pageY;

        var ImageX = DragImage.offsetLeft;
        var ImageY = DragImage.offsetTop;

        DragShiftX = MouseX - ImageX;
        DragShiftY = MouseY - ImageY;

        window.onmousemove = DragMove;
        window.onmouseup = DragStop;
    };

    function DragMove(EO) {
        EO = EO || window.event;
        EO.preventDefault();

        var MouseX = EO.pageX;
        var MouseY = EO.pageY;

        var ImageX = MouseX - DragShiftX;
        var ImageY = MouseY - DragShiftY;

        DragImage.style.left = ImageX + "px";
        DragImage.style.top = ImageY + "px";
    };

    function DragStop() {
        window.onmousemove = null;
        window.onmouseup = null;
    };
})();