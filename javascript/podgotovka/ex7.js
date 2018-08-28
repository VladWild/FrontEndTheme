let objReg = {
    hello: function() {
        return this;
    }
};

let objArrow = {
    hello: () => this
};

// возвращает, как и ожидается,
// объект objReg
console.log(objReg.hello());
// возвращает объект Window!
console.log(objArrow.hello());

