// a - разреженный массив
let a = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";

function arrayHasOwnIndex(array, key) {
    return array.hasOwnProperty(key) &&
        /^0$|^[1-9]\d*$/.test(key) &&
        key <= 4294967294;
}

for (key in a) {
    if (arrayHasOwnIndex(a, key)) {
        console.log(a[key]);
    }
}

