let user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

setTimeout(user.sayHi.bind(user), 1000);

