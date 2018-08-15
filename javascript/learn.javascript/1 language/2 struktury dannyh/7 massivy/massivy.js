var fruits = ["Яблоко", "Апельсин", "Слива", true];
fruits[5] = "Манго";
fruits[6] = {};

for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i] + ": " + typeof fruits[i]);
}