function f() {
    this.l = 'fvdfvdfv';
}

function f1() {

}

f1.prototype = new f();

let myF = new f1();

console.log(myF.l);