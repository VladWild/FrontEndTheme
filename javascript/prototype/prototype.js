function A() {
    this.f = true;
    this.f1 = function f() {
        console.log("f1");
    }
}

var L = {
    f3: function () {
        console.log("f3");
    }
}

A.prototype = L;

A.prototype.f2 = function () {
    console.log("f2");
}


let a = new A();

a.f1();
a.f2();
a.f3();
console.log();

L.f3();
L.f2();