function readData() {
    var data = '{ "name": "Вася", "age": 30 }';

    try {
        // ...
        blabla(); // ошибка!
    } catch (e) {
        // ...
        if (e.name !== 'SyntaxError') {
            throw e; // пробрасываем
        }
    }
}

try {
    readData();
} catch (e) {
    console.log( "Поймал во внешнем catch: " + e ); // ловим
}

