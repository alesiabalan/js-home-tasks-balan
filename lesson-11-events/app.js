'use strict'

var DragImage = null;
var DragShiftX;
var DragShiftY;

var list = document.getElementById("list");
var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++) {
    AddEventHandler(images[i], "mousedown", DragStart, false);
};



function DragStart(EO) {
    EO = EO || window.event;
    PreventDefault(EO);

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
    PreventDefault(EO);

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

function AddEventHandler(Elem, EventName, HandlerFunc, CaptureFlag) {
    if (Elem.addEventListener)
        Elem.addEventListener(EventName, HandlerFunc, CaptureFlag);
    else if (!CaptureFlag)
    {
        var EventName2 = 'on' + EventName;
        if (Elem.attachEvent)
        {
            var IEHandlerF = function () {
                HandlerFunc.call(Elem);
            };
            Elem.attachEvent(EventName2, IEHandlerF);
            var StoreName = "__IEHandlerF_" + EventName;
            Elem[StoreName] = IEHandlerF;
        }
        else
        if (!Elem[EventName2])
            Elem[EventName2] = HandlerFunc;
    }
}