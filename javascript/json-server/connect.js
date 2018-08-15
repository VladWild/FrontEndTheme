/*синхронный запрос*/

var request = new XMLHttpRequest(); // 1. Создаём новый объект XMLHttpRequest
request.open('GET', 'http://localhost:3000/db', false); // 2. Конфигурируем его: GET-запрос на URL 'http://localhost:3000/db'
request.send(); // 3. Отсылаем запрос

var object = request.response;

console.log(object);

/*попробовать асинхронный*/