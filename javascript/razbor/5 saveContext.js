function User(name, age) {
    this.name = name;
    this.age = age;
    this.init = function () {
        ((function initName(){
            if (this.name === undefined) this.name = 'noName';
        }).bind(this))();
        ((function initAge() {
            if (this.age === undefined) this.age = 'unknown';
        }).bind(this))();
    }
}

let user = new User();
user.init();

console.log(user);

