let arr = ['a', 'b', 'c'];

arr.forEach(function (item, i, array) {
    console.log("Элемент: " + item +
        ". Его номер: " + i +
        ". Его массив: " + array);
});

arr.forEach((item, i, array) =>
    console.log("Элемент: " + item +
        ". Его номер: " + i +
        ". Его массив: " + array)
);

