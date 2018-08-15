var name = "";

var user = {
    name: "Василий",

    export: function() {
        return {
            value: this
        };
    }

};

console.log( user.export().value.name );
console.log( user.name );

console.log( user.export().value.name == user.name);