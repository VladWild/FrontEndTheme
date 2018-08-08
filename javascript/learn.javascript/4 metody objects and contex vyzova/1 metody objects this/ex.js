var user = {
    name: 'Василий',

    // метод
    sayHi: function() {
        console.log( 'Привет! Я ' + this.name );
    },

    showthis: function() {
        console.log(this);
    }

};



// Вызов
user.sayHi();
user.showthis();


function func() {
    "use strict";
    console.log( this ); // выведет undefined (кроме IE9-)
}

func();

