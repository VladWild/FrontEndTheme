function deepEqual (obj1, obj2){
    return JSON.stringify(obj1)===JSON.stringify(obj2);
}

console.log(deepEqual({r: 'dsvdv'}, {r: 'dsavdv'}));