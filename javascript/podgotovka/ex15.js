var a = 1;

function getFunc() {
    var a = 2;

    var func = new Function('', 'console.log(a)');

    return func;
}

getFunc()(); // 1, из window