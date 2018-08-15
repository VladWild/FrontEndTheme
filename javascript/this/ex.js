var objReg = {
    hello: function() {
        return this;
    }
};

var objArrow = {
    hello: () => this
};

console.log(objReg.hello()); // возвращает, как и ожидается, объект objReg
console.log(objArrow.hello()); // возвращает объект Window!

console.log(this)

function test() {
    console.log('hello world');
    console.log(this);
}

test();

