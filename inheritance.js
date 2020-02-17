//ES6


const secret = new WeakMap();

class Figure {
    constructor(name) {
        secret.set(this, { name: name });
    }
    getName() {
        return secret.get(this).name;
    }
}

class Circle extends Figure {
    constructor(name, radius) {
        super(name);
        secret.set(this, { radius: radius });
    }
    getRadius() {
        return secret.get(this).radius;
    }
    getArea() {
        return secret.get(this).radius * secret.get(this).radius * Math.PI;
    }
}

let circle = new Circle("Circ 1", 12);
console.log(circle.getArea())



//ES5

var animal = {
    jumps: null
}

var rabbit = {
    __proto__: animal,
    jumps: true
}

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen)