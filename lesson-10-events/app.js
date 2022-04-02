'use strict';
(function () {
    function makeForm(form, arr) {
        arr.map(createForm);

        function createForm(arr) {
            if (arr.element === 'textline') {
                return form.appendChild(createText(arr));
            } else if (arr.element === 'select') {
                return form.appendChild(createSelect(arr));
            } else if (arr.element === 'radio') {
                return form.appendChild(createRadio(arr));
            } else if (arr.element === 'checkbox') {
                return form.appendChild(createCheckbox(arr));
            } else if (arr.element === 'textarea') {
                return form.appendChild(createTextarea(arr));
            } else if (arr.element === 'submit') {
                return form.appendChild(createSubmit(arr));
            };
        };

    }

    function createLabel(name, caption) {
        var label = document.createElement('label');
        label.for = name;
        label.innerHTML = caption;
        return label;
    };

    function createInput(name, element) {
        var input = document.createElement('input');
        input.name = name;
        input.type = element;
        return input;
    };

    function createText(arr) {
        var caption = arr.label;
        var name = arr.name;
        var element = arr.element;

        var div = document.createElement('div');
        div.appendChild(createLabel(name, caption));
        div.appendChild(createInput(name, element));

        return div;
    };

    function createSelect(arr) {
        var caption = arr.label;
        var name = arr.name;
        var options = arr.items;

        var div = document.createElement('div');
        var label = createLabel(name, caption);
        var select = document.createElement('select');
        select.name = name;

        div.appendChild(label);
        div.appendChild(select);
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement('option');
            option.innerHTML = options[i];
            select.appendChild(option);
        }
        return div;
    };

    function createRadio(arr) {
        var caption = arr.label;
        var element = arr.element;
        var name = arr.name;
        var options = arr.items;

        var div = document.createElement('div');
        div.appendChild(createLabel(name, caption));
        for (var i = 0; i < options.length; i++) {
            div.appendChild(createInput(name, element));
            div.appendChild(document.createTextNode(options[i]));
        }
        return div;
    };

    function createCheckbox(arr) {
        var caption = arr.label;
        var element = arr.element;
        var name = arr.name;

        var div = document.createElement('div');
        div.appendChild(createLabel(name, caption));
        div.appendChild(createInput(name, element));

        return div;
    };

    function createTextarea(arr) {
        var caption = arr.label;
        var name = arr.name;
        var cols = arr.cols;
        var rows = arr.rows;

        var div = document.createElement('div');
        div.appendChild(createLabel(name, caption));
        var textarea = document.createElement('textarea');
        textarea.cols = cols;
        textarea.rows = rows;
        div.appendChild(textarea);

        return div;
    };

    function createSubmit(arr) {
        var caption = arr.label;
        var element = arr.element;
        var name = arr.name;

        var submit = createInput(name, element);
        submit.value = caption;

        return submit;
    };

    var form = document.forms['nameOfForm'];
    var arr = [
        {label: 'Разработчики:', element: 'textline', name: 'developers'},
        {label: 'Название сайта:', element: 'textline', name: 'nameOfSite'},
        {label: 'URL сайта:', element: 'textline', name: 'URL'},
        {label: 'Дата запуска сайта:', element: 'textline', name: 'datePlaySite'},
        {label: 'Посетителей в сутки:', element: 'textline', name: 'countDay'},
        {label: 'E-mail для связи:', element: 'textline', name: 'emailConnect'},
        {label: 'Рубрика каталога:', element: 'select', name: 'rubric', items: ['бытовая техника', 'еда', 'одежда']},
        {label: 'Размещение:', element: 'radio', name: 'placing', items: ['бесплатное', 'платное', 'VIP']},
        {label: 'Разрешить отзывы:', element: 'checkbox', name: 'permission'},
        {label: 'Описание сайта:', element: 'textarea', name: 'description', cols: '30', rows: '8'},
        {label: 'Опубликовать', element: 'submit', name: 'publish'}
    ];

    makeForm(form, arr);
})();