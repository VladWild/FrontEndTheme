/*'use strict'*/
console.log(this.toString());

// в консоль выводится объект Window
// Window { postMessage: ƒ,
// blur: ƒ,
// focus: ƒ,
// close: ƒ,
// frames: Window, …}

function myFunction() {
   /* console.log(this.toString());*/
    return this;
}

// Вызовем функцию
console.log(myFunction().toString());

// функция выводит тот же объект Window!
// Window { postMessage: ƒ,
// blur: ƒ,
// focus: ƒ,
// close: ƒ,
// frames: Window, …}

/*
var objArrow = {
    hello: () => this
};

console.log(objReg.hello().toString());*/
