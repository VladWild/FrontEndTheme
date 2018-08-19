/*асинхронный запрос*/

/*var request = new XMLHttpRequest();
request.open('POST', 'http://localhost:3000/db', true);
request.onreadystatechange = function(){
    if (request.readyState === 4) {
        let str = request.response;
        console.log(str);
    }
};

var data = JSON.stringify({"id": "1", "password": "101010"});
request.send(data); // 3. Отсылаем запрос*/

/*асинхронный запрос*/

var xhr = new XMLHttpRequest();
url = "http://localhost:3000/db?data=" + encodeURIComponent(JSON.stringify({"email": "hey@mail.com", "password": "101010"}));
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.response);
    }
};
var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
xhr.send();






