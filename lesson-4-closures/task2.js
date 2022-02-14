"use strict"
var obj = {
    className: 'open open menu'
};
var cls = 'open';

function deleteName(obj, cls) {
    obj.className = obj.className.split(' ').filter(x => x !== cls).join('');
}
deleteName(obj, cls);
console.log(obj.className);