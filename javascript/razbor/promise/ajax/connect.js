let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/db', true);
request.onreadystatechange = function(){
    if (request.readyState === 4) {
        let str = request.response;
        console.log(str);
    }
};

request.send();

