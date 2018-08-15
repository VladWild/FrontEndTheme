'use strict';

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // геттер
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // сеттер
    set fullName(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
    }

    // вычисляемое название метода
    ["test".toUpperCase()]() {
        console.log("PASSED!");
    }

};

let user = new User("Вася", "Пупков");
console.log( user.fullName ); // Вася Пупков
user.fullName = "Иван Петров";
console.log( user.fullName ); // Иван Петров
user.TEST(); // PASSED!