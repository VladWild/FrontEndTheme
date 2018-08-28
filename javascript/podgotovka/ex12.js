function counter() {
    let i = 0;
    return function () {
        return i++;
    }
}

let c = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
