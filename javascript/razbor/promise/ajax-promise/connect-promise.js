/*функция асинхронного ajax запроса*/

function get(url) {
    return new Promise(function(succeed, fail) {
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.addEventListener("load", function() {
            if (request.status < 400)
                succeed(request.response);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function() {
            fail(new Error("Network error"));
        });
        request.send();
    });
}

get("http://localhost:3000/db").then(function(response) {
    return JSON.parse(response);
}).then(function(data) {
    console.log(data);
}).catch(function(error){
    console.log(error);
});