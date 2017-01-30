function Point(x,y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Side(length) {
  this.length = length;
}


class Shape{
  addToPlane(x, y){
    return this.position = new Point(x,y)
  }
  move(x,y){
    return this.position = new Point(x,y)
  }
}

//Circle Class es6 not working. ask how to make work
// class Circle extends Shape {
//
//   constructor(radius){
//   super()
//   this.radius = radius
//   }
//   diameter(){
//     return this.radius*2
//   }
//   area(){
//     return Math.PI * c.radius^2
//   }
//   circumference(){
//     return 2 * Math.PI * c.radius
//   }
// }

// ES5 Patterns
function Circle(radius) {
  Shape.call(this);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
  return(this.radius*2);
}
Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

//
// function Polygon(lengths){
//    this.sides = lengths.map(function(length){
//     return new Side(length)
//   })

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.perimeter = function() {
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

// Ask how to refactor above using reduce()
// Polygon.prototype.perimeter = this.sides.reduce(function(total, side){
//   return total + side[length]
// }, 0)

Polygon.prototype.numberOfSides = function() {
  return(this.sides.length);
}

function Quadrilateral(l1,l2,l3,l4){
  Polygon.call(this, [new Side(l1), new Side(l2), new Side(l3), new Side(l4)])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height){
  //this constructor does not take in an array bc it inherits from Quadrilateral. Quadrilateral takes in 4 numbers as arguements and then turns them into sides when it is constructed.
  //function Quadrilateral(l1,l2,l3,l4)
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height

}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function(){
  return this.width * this.height
}

function Square(length){
  Rectangle.call(this, length,length,length,length)
}

Square.prototype = Object.create(Rectangle.prototype)
//this makes the square prototype initialize as an Object of the Rectangle Prototype
Square.prototype.constructor = Square
//This defines the word to use for the square constructor
Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}

function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
