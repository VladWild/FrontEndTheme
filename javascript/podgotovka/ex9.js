function User() {
    this.sayHi = function() {
        console.log(this.name)
    };
}

User.createAnonymous = function() {
    var user = new User;
    user.name = 'Аноним';
    return user;
}

User.createFromData = function(userData) {
    var user = new User;
    user.name = userData.name;
    user.age = userData.age;
    return user;
}

// Использование

var guest = User.createAnonymous();
guest.sayHi(); // Аноним

var knownUser = User.createFromData({
    name: 'Вася',
    age: 25
});
knownUser.sayHi(); // Вася

function Article() {
    Article.count++;
}

Article.count = 0;

let l = new Article();
let k = new Article();

console.log(Article.count);

