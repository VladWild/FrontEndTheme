function sqr(w, h) {
    return w * h;
}

console.log(sqr(20, 40));
console.log(sqr(20, 50));
console.log(sqr(20, 60));

//---------------------------------------------------------

function w(w) {
    function h(h) {
        return w * h;
    }

    return h;
}

let saveW = w(20);

console.log(saveW(40));
console.log(saveW(50));
console.log(saveW(60));

