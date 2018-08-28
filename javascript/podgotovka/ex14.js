'use strict';

let a = (function makeCounter() {
    let currentCount = 1;

    console.log(currentCount);

    function l() {
        let currentCount = 10;
        console.log(currentCount);
    }

    console.log(currentCount);

    return l;

})();

a();