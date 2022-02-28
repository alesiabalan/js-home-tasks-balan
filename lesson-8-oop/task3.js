function anClean(arr) {
    let cleanArr = new Map();
    for (let key of arr) {
        let sort = key.split('').sort().join('').toLowerCase();
        cleanArr.set(sort, key);
    }
    return Array.from(cleanArr.values());
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'