(function () {
    function Question(question, answers, right) {
        this.question = question;
        this.answers = answers;
        this.right = right;
    }
    Question.prototype.display = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log((i + 1) + '. ' + this.answers[i]);
        }
    }
    Question.prototype.check = function (num) {
        if (num == this.right) {
            confirm('Правильный ответ!')
        } else {
            confirm('Неправильный ответ!')
        }
    }
    var quiz = [
        new Question('Как называется единица, служащая для измерения силы тяжести?', ['Паскаль', 'Ньютон', 'Джоуль', 'м/с'], 2),
        new Question('Как называется шестая нота?', ['ля', 'до', 'ми', 'си'], 1),
        new Question('Чему равно число Пи?', ['3,18', '2,65', '3,14', '8,23'], 3),
        new Question('Чем измеряют атмосферное давление?', ['Барометр', 'Амперметр', 'Вольтметр', 'Манометр'], 1)
    ]
    function randomQuestion(x) {
        var rand = Math.floor(Math.random() * quiz.length);
        return x[rand];
    }
    randomQuestion(quiz).display();
    var num = parseInt(prompt('Ваш ответ?'));
    randomQuestion(quiz).check(num);
})();