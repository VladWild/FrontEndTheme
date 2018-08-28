function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


