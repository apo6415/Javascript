var book2 = {};

function Book(title, author, published, hasMovie) {
    console.log(this); 


    this.title = title;
    this.author = author;
    this.published = published;
    this.hasMovie = hasMovie;

    this.display = function() {
        console.log(this);
    };
}

var book1 = new Book("The Hound of the Baskervilles", "Sir Arthur Conan Doyle", 1901, true);
book1.display();
book2.title     = "The Hound of the Baskervilles";
book2.author    = "Sir Arthur Conan Doyle";
book2.published = 1901;
book2.hasMovie  = true;

console.log(book1.constructor);
console.log(book2.constructor);

//
// A function that makes rectangle objects
//
function makeRectangle(width, height) {
    console.log("This in makeRectangle is: ");
    console.log(this);

    return { 
        width: width || 0,
        height: height || 0,
        getArea: function() {
            console.log("This in makeRectangle's getArea is: ");
            console.log(this);
            return this.width * this.height;
        }
    };
}

var rect2 = makeRectangle(5, 10);
console.log("Area of rectangle 2: " + rect2.getArea());   