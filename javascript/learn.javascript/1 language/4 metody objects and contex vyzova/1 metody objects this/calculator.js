var calculator = {
    a: 0, b: 0,
    read: function (a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a - this.b;
    }
}

calculator.read(5, 1);

console.log(calculator.sum());
console.log(calculator.mul());