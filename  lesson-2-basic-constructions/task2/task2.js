var name,
    surname,
    dadname,
    old;

do {
    name = prompt('Введите имя: ');
} while (!name);
do {
    surname = prompt('Введите фамилию: ');
} while (!surname);
do {
    dadname = prompt('Введите отчество: ');
} while (!dadname);
do {
    old = prompt('Введите возраст: ');
} while (!old || isNaN(old) || (old > 100));
var pension = ((sexQ && old > 65) || (!sexQ && old > 60)) ? 'да' : 'нет';
var sexQ = confirm('Вы мужчина?');
var sex = (sexQ) ? 'мужской' : 'женский';

alert(`ваше ФИО: ${surname} ${name} ${dadname}
ваш возраст в годах: ${old}
ваш возраст в годах: ${parseInt(old) * 365}
через 5 лет вам будет: ${parseInt(old)+5}
ваш пол: ${sex}
вы на пенсии: ${pension}`);
