Object.equals = function( x, y ) {
    // если оба x и y являются нулевыми или неопределенными и точно такими же
    if ( x === y ) return true;
    // если они не являются строго равными, они должны быть объектами
    if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
    //они должны иметь точно такую же цепочку прототипов (проверка конструктра)
    if ( x.constructor !== y.constructor ) return false;
    for ( let p in x ) {
        if (!x.hasOwnProperty(p)) continue;
        // другие свойства были протестированы с использованием x.constructor === y.constructor
        if (!y.hasOwnProperty(p)) return false;
        // позволяет сравнивать x [p] и y [p], когда установлено значение undefined
        if ( x[p] === y[p] ) continue;
        // если они имеют одно и то же строгое значение или идентичность, то они равны
        if ( typeof( x[p] ) !== "object" ) return false;
        // Числа, строки, функции, булевы должны быть строго равны
        if ( !Object.equals( x[p],  y[p] ) ) return false;
        // Объекты и массивы должны быть протестированы рекурсивно
    }

    for (let p in y ) {
        if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) return false;
        // позволяет установить x [p] в undefined
    }
    return true;
};

var first = {
    str: 'a',
};

var second = {
    str: 'a',
};

console.log(Object.equals(first, second));

