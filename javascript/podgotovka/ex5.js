var counter = (function() {
    console.log('init');
    let v = 0;
    return function () {
        return v++;
    };
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());