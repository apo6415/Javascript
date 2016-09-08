var Shape = require('./Shape.js');
//var shape = Shape.nShape();

function Square () {
}

Square.prototype = Object.create(Shape.objectConstructor.prototype);
//Square.prototype.__proto__ = Shape.prototype;
//Square.prototype = Object.create(Shape.prototype);
var S = new Square();

S.center = {x: 0, y:0 };
//var M = Shape.prototype.Shape();
var verifySquareobject = S instanceof Square;
var verifyShapeObject  = S instanceof Shape.objectConstructor;
console.log('Instance of Square ==  ' + verifySquareobject);
console.log('Instanceof Shape == ' + verifyShapeObject);
console.log(S.move(5,5));
console.log(S.X);
//console.log(M instanceof Shape);
//S.move(5,5);


