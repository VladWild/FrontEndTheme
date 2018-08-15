var obj = {};
console.log( obj.__proto__.toString() );

console.log([1,2,3])

function A() {}

var a = new A;

function B() {}

var b = new B;

b.__proto__= a;

console.log(b instanceof B);