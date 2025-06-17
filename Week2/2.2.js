// const rec = {
//     length : 20,
//     width: 10,
//     edges: 4,
//     vertices : 4,
//     color: "blue"
// }

// rec.area = function () {
//     return rec.width * rec.length;
// }

// rec.getColor = function () {
//     console.log(`Color of the Rectangle : ${rec.color}`);
// }

// console.log(rec.getColor()); // undefined
// console.log(rec.area());



// blueprint
// this keyword -> points towards the current object...
class Rectangle {
    // properties
    constructor(length, width, color, edge, vertices) {
        this.length = length,
        this.width = width,
        this.color = color,
        this.edge = edge,
        this.vertices = vertices
    }

    // methods/functions
    getArea() {
        // console.log(this); 
        // current object
        return this.length * this.width;
    }

    getColor() {
        console.log(`Color of the Rectangle : ${this.color}`);
    }

    getPerimeter() {
        return 2*(this.length + this.width);
    }
}

// instance of class 
const rec = new Rectangle(21,12,"blue",4,4); // object 
// console.log(rec);
// console.log(typeof rec);
console.log(`
             Area of Rectangle : ${rec.getArea()}
             Color of Rectangle : ${rec.getColor()}
             Perimeter of Rectangle : ${rec.getPerimeter()}
             `);


// pre-defined Classes
const currDate = new Date();
console.log(currDate.getTime());
console.log(currDate.getTime);

const map = new Map();
map.set("ID",1);
map.set("Type",`${typeof map}`);
console.log(map.get("Type"));
