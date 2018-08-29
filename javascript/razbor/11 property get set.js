function User(name, age) {
    this.name = name;
    this.age = age;
}

Object.defineProperties(User.prototype, {
    name: {
        set: function (name) {
            console.log('set name');
            this.name = name;
        },
        get: function () {
            console.log('get name');
        }
    },
    age: {
        set: function (age) {
            console.log('set age');
        },
        get: function () {
            console.log('get age');
        }
    }
});

let user = new User();
user.name = 'Pavel';
user.age = 23;
console.log(user.name);
console.log(user.age);

