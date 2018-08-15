function makeCounter() {
    var currentCount = 1;

    return { // возвратим объект вместо функции
        getNext: function() {
            return currentCount++;
        },

        set: function(value) {
            currentCount = value;
        },

        reset: function() {
            currentCount = 1;
        }
    };
}

var counter = makeCounter();

console.log(counter.getNext());
counter.set(5)
console.log(counter.getNext());
counter.reset()
console.log(counter.getNext());