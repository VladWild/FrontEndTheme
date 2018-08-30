var sphere={
    x:1,
    y:1,
    z:1,
    get radius(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2));
    },
    set radius(value) {
        return this.x = this.y = this.z = Math.sqrt((Math.pow(value,2))/3)
    }
};
console.log( sphere.radius ); // ввыведет значение из геттера (1.1.73205081)
sphere.radius = 10;
console.log( sphere.x ); // 5.774
console.log( sphere.y ); // 5.774
console.log( sphere.z ); // 5.774