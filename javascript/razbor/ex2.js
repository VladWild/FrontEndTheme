var alerts = [];
for(var i = 0; i < 10; i++) {
    var alertFunction = function() {
        console.log(i);
    };
    alerts.push(alertFunction);
}


for(var j = 0; j < 10; j++) {
    alerts[j]();
};



