let obj1 = {
    hello: function() {
        console.log('Hello world');
        return this;
    },
    obj2: {
        breed: 'dog',
        speak: function(){
            console.log('woof!');
            return this;
        }
    }
};

console.log(obj1.hello());
console.log(obj1.obj2.speak());

