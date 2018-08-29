let obj = {
    real_a: 1,
    get a() { return this.real_a * 2; },
    set a(v) { return this.real_a = v / 2; }
};

// Примеры
console.log(obj.real_a); // 1
obj.a = 9; // setter в действии
console.log(obj.real_a); // 4.5
console.log(obj.a); // 9; getter в действии

