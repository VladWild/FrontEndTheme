function f() {
    this.f = 'f0';
}

function f1() {
    this.f1 = 'f1-';
}

f1.prototype = new f();

let myf = new f1();

console.log(myf.f1);
console.log(myf.f);
