function pow(x) {
    x++;
    console.log(x);
    pow(x);
}

console.log( pow(0) ); // 8