/*синхронный запрос*/

var request = new XMLHttpRequest(); // 1. Создаём новый объект XMLHttpRequest
request.open('GET', 'http://localhost:3000/db', false); // 2. Конфигурируем его: GET-запрос на URL 'http://localhost:3000/db'
request.send(); // 3. Отсылаем запрос

var str = request.response;

var servObj = JSON.parse(str);

console.log(servObj);
console.log(servObj.books[0].title);

servObj.books.push(new Object());






