var user = {
    name: "Вася",
    hi: function() { console.log(this.name); },
    bye: function() { console.log("Пока"); }
};

user.hi(); // Вася (простой вызов работает)

// а теперь вызовем user.hi или user.bye в зависимости от имени
(user.name === "Вася" ? user.hi : user.bye)();

user.hi();
console.log(typeof user.hi());