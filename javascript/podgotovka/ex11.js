function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

let user = {
    firstName: "Вася",
    sayHi: function() {
        console.log(this.firstName);
    }
};

/*say = bind(user.sayHi, user);
say();*/

(function f() {
    console.log(this.firstName);
}).bind(user)();
