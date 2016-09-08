module.exports = {
    objectConstructor : function () {
    }
}

module.exports.objectConstructor.prototype.X = 0;
module.exports.objectConstructor.prototype.Y = 0;

module.exports.objectConstructor.prototype.move = function(x, y) {
    this.X = x;
    this.Y = y;
    console.log('Moved to ' + this.X + ',' + this.Y);
}

//exports.Shape = Shape();

//console.log(typeof(module.exports.Shape));
