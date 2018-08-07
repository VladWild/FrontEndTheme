function makeCounter() {
    var currentCount = 1;

    // возвращаемся к функции
    function counter() {
        return currentCount++;
    }

    // ...и добавляем ей методы!
    counter.set = function(value) {
        currentCount = value;
    };

    counter.reset = function() {
        currentCount = 1;
    };

    return counter;
}

console.log( counter() ); // 1
console.log( counter() ); // 2

counter.set(5);
console.log( counter() ); // 5