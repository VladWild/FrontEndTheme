function Man(name){
    this.name = name;
    this.intro = function() {
        console.log('Hi, my name is '
            + this.name);
        return this;
    };
}

let man = new Man('Robert');
man.intro();

