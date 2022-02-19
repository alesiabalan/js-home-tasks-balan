function Vowel(str){
    var i = 0;
    str = str.toLowerCase().split('');

    str.forEach(e => {
        var mass = ['а', 'у','о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
        if(mass.indexOf(e) !== -1){
            i++;
        }
    });
    return i;
}

console.log("В строке  гласных букв: "+ Vowel(prompt("Введите строку: ")) );