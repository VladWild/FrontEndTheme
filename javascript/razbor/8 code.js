var alerts = [];

for (var i = 0; i < 10; i++){
    var alertFunction = function (x) {
        return function f() {
            console.log(x);
        }
    }(i);
    alerts.push(alertFunction);
};

alerts.forEach(alertFunction => alertFunction());

