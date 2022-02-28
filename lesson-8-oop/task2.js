function isPal(string) {
    return string.toLowerCase().split(' ').join('') === string.toLowerCase().split('').reverse().join('').split(' ').join('');
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false