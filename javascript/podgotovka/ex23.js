function makeCounter() {
    let value = 0;
    return function () {
        return value++;
    }
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());