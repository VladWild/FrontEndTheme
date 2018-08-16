/*вывод результата*/
/*------------------------ begin view ------------------------*/
var view = {
    showNumber: function (n) {
        let element = document.getElementById("showResult");
        element.innerHTML = n;
    }
};
/*------------------------- end view -------------------------*/

/*расчет результата*/
/*------------------------ begin model -----------------------*/
var model = {
    number: 0,

    calculate: function (x, y) {
        this.number = x * y;
        let result = this.number;

        view.showNumber(result);
    }
};
/*------------------------- end model ------------------------*/

/*отвечает на события пользователя*/
/*---------------------- begin controller --------------------*/
var controller = {

    handleClick: function () {
        let elem1 = document.getElementById("elem1");
        let elem2 = document.getElementById("elem2");
        model.calculate(elem1.value, elem2.value);
    }
};
/*----------------------- end controller ---------------------*/

/*-------------- anonymous initialization function -----------*/
(function f() {

    var app = {

        /*подключает все необходимые методы*/
        init: function () {
            this.main();
            this.event();
        },

        /*несвязаный с данной концепцией код, например, подключение и настройка плагинов*/
        main: function () {

        },

        /*внутри этой функции мв регистрируем обработчики событий*/
        event: function () {
            let element = document.getElementById("calcUser");
            element.onclick = controller.handleClick;
        }
    }

    app.init();

}());
/*-------------- anonymous initialization function ------------*/