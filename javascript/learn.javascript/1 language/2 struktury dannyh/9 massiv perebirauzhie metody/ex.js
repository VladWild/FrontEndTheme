var fruits = ["Яблоко", "Апельсин", "Слива", true];
fruits[5] = "Манго";
fruits[6] = {};

fruits.forEach(function(item, i, arr) {
    console.log( i + ": " + item + " (массив:" + arr + ")" );
});

function f(width=100, height=200) {

}

f(100)

