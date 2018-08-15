var room = {
    number: 777,
    number2: 888,

    valueOf: function() { return this.number; },
    toString: function() { return this.number2; }
};

console.log( +room );  // 777, вызвался valueOf

delete room.valueOf; // valueOf удалён

console.log( +room );  // 777, вызвался toString