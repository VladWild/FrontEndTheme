function makeCounter() {
    var currentCount = 1;

    return function() { // (**)
        return currentCount++;
    };
}

var counter = makeCounter(); // (*)

// каждый вызов увеличивает счётчик и возвращает результат
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log( counter() ); // 3

// создать другой счётчик, он будет независим от первого
var counter2 = makeCounter();
console.log( counter2() ); // 1

