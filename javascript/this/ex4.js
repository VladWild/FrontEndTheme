var dog = {
    breed: 'Beagles',
    lovesToChase: 'rabbits'
};

function chase() {
    console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.');
}

dog.foo = chase;
dog.foo(); // в консоль попадёт Beagles loves chasing rabbits.

chase(); //так эту функцию лучше не вызывать