/*асинхронный запрос*/

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/db', true);
request.onreadystatechange = function(){
    if (request.readyState === 4) {
        let str = request.response;
        console.log(str);
    }
};

request.send(); // 3. Отсылаем запрос

/*
var servObj = JSON.parse(str);

console.log(servObj);
console.log(servObj.books[0].title);

servObj.books.push(new Object());
*/






