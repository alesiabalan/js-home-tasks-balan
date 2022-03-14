function dynamicForm(arr, name) {
    var elem;
    for (var i = 0; i < arr.length; i++){
        elem = document.write('<div style="display: flex; flex-direction: row"><label style="display: block; width: 200px">' + arr[i].label + '</label>' + arr[i].element+ '</div>');
    };
    name.append(elem);
    var button = document.write('<div><button>Опубликовать</button></div>');
    name.append(button);
}
var arr = [
    { label: 'Разработчики:', element: '<input style="width: 450px">'},
    { label: 'Название сайта:', element: '<input style="width: 450px">'},
    { label: 'URL сайта:', element: '<input style="width: 300px">'},
    { label: 'Дата запуска сайта:', element: '<input style="width: 80px">'},
    { label: 'Посетителей в сутки:', element: '<input style="width: 80px">'},
    { label: 'E-mail для связи:', element: '<input style="width: 200px">'},
    { label: 'Рубрика каталога:', element: '<select style="width: 200px">\n' +
                                           '<option value="value1" selected>Бытовая техника</option>\n' +
                                           '<option value="value2">Еда</option>\n' +
                                           '</select>'
    },
    { label: 'Размещение:', element: '<div>\n' +
                                     '<input type="radio" id="payChoice1">\n' +
                                     '<label for="payChoice1">бесплатное</label>\n' +
                                     '<input type="radio" id="payChoice2">\n' +
                                     '<label for="payChoice2">платное</label>\n' +
                                     '<input type="radio" id="payChoice3">\n' +
                                     '<label for="payChoice3">VIP</label>\n' +
                                     '</div>'
    },
    { label: 'Разрешить отзывы:', element: '<input type="checkbox" checked>'},
    { label: 'Описание сайта:', element: '<textarea style="width: 600px; height: 150px"></textarea>'}
];
var name = document.getElementById('nameOfForm');
dynamicForm(arr, name);



