var name = prompt('Введите имя: '),
    surname = prompt('Введите фамилию: '),
    dadname = prompt('Введите отчество: '),
    old = prompt('Введите возраст: '),
    sexQ = confirm('Вы мужчина?'),
    pension;

if (sexQ === true) {
    sex = 'мужской';
} else {
    sex = 'женский';
}

if ((sexQ = true && old > 65) || (sexQ = false && old > 60)) {
    pension = 'да';
} else {
    pension = 'нет';
}

alert(`ваше ФИО: ${surname} ${name} ${dadname}
ваш возраст в годах: ${old}
ваш возраст в годах: ${parseInt(old) * 365}
через 5 лет вам будет: ${parseInt(old)+5}
ваш пол: ${sex}
вы на пенсии: ${pension}`);
