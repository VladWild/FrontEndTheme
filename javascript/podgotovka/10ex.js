let user = {
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
    console.log(this[firstPart] + " " + this[lastPart]);
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.apply(user, ['firstName', 'surname']); // "Василий Петров"
showFullName.apply(user, ['firstName', 'patronym']); // "Василий Иванович"

