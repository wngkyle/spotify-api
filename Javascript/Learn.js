// const prompt = require("prompt-sync")();

// var fname = prompt("Enter your first name: ");
// var lname = prompt("Enter your last name: ");

// console.log("Your Full Name is", fname, lname);

console.log("hello wold");

// use keyword let for variables
let firstWord = "kkkk";
console.log(firstWord);

// use keyword const for constants or values you don't want to change
const annualRate = 0.3; // cannot modify the value later on
let interestRate = 0.4;
interestRate = 1;
console.log(interestRate);

// undefined variables
let firstName; // undefined
let lastName = undefined; // undefined
let middleName = null; // we use null in situations where we want to explicitly clear the value of the variable

// Dynamic typing in javascript
let num1 = 5;
let float1 = 3.4; // all numbers, integers and doubles, are type number
let deter = true;
console.log(typeof(firstWord)) // type string
console.log(typeof(num1)) // type number
console.log(typeof(float1)) // type number
console.log(typeof(deter)) // type boolean
console.log(typeof(lastName)) // type undefined
console.log(typeof(middleName)) // type object

// Primitive types in javascript:
// - string
// - number
// - boolean
// - undefined
// - null

// Object
// {} is object literals
// In the curly braces, we add key and values pair
let person = {
    firstName: "Mosh",
    age: 30
}; 
console.log("person:" + person.age);

// changing the name of the person
// Dot notation 
// Bracket notation
person.name = "John";
console.log(person.name);
person['age'] = 20;
console.log(person.age);

// Arrays
// Arrays in javascript are accessed using index
// Arrays are also dynamic, you can expand their length
// The type of object that can be stored in the array is also dynamic
// You can store different types of object in javascript array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 8;
console.log(selectedColors.length);

// Functions
// you don't need to add semicolon at the end of a function
function greet(fname, lname = "Wang") {
    console.log("hello " + fname + " " + lname +  ", how are you?");
}
let fname = 'kyle'; 
// arguments are the actual values supplied to the parameter
// parameters are the what declared is declared in the function header or function signature
greet(fname);
greet("John", "Hopkins");

// Function with return values
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number)
// or
console.log(square(2))

// If else statement
let hour = 3;
if (hour == 0) {
    console.log('closed');
} else if (hour > 5) {
    console.log('opened');
} else {
    console.log('preparing');
}

// Loops
// for 
// while
// do...while
// for...in
// for...of
for (let i = 0; i < 8; i++) {
    console.log(i);
}

// Factory function
function createCircle(radius, location) {
    const circle = {
        radius: radius, 
        location: location,
        isVisible: true,
        draw: function() {
            console.log('draw');
        }
    };
    return circle;
}

let circle1 = createCircle(3, {x:1, y:4})
console.log("Circle1 radius:", circle1.radius);
console.log("Circle1 location:", circle1.location)
circle1.draw();
console.log(circle1.location)

function createCircle(radius, location) {
    return {
        radius, // if the key and value are the same, we can make our code shorter by removing the value and simply adding the key
        location: location,
        isVisible: true,
        draw() { // the same applies to functions, we can take out the key and value pair
            console.log('draw');
        }
    };
}

const circle2 = createCircle(1, {x:2, y:6});
console.log(circle2.location)


// Constructor Function
function Circle(radius, location) {
    this.radius = radius;
    this.location = location;
    this.draw = function() {
        console.log('draw');
    }
    // return this; // this is basically what happen but javascript return this automatically, 
                    // so we don't have to return this explicitly
}

const circle = new Circle(1, {x:5, y:5}); 
const x = {}; // the keyword new create a javascript empty object like this


// Difference between factory and constructor function 
const myCircle = createCircle(3, {x:1, y:2}); // factory function
const myCircle2 = new Circle(7, {x:3, y:5}); // constructor function


// Getters and Setters next
const me = {
    firstName: 'Kyle',
    lastName: 'Wang',
    get fullName() { // getter function, add keyword get
        return `${me.firstName} ${me.lastName}`;
    },
    set fullName(value) { // setter function, add keyword set
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}

// The below implementation produce the same result
console.log(me.firstName + " " + me.lastName);
console.log(`${me.firstName} ${me.lastName}`);

// getter for accessing property in an object
// setter for setting property in an object

me.fullName = 'Wei-Kai Wang';
console.log(me);

// ***** IMPORTANT ********
// Value Types and Reference types
// Values types:
// - number
// - string
// - boolean
// - symbol
// - undefined
// - null
// Reference types:
// - object
// - function 
// - array

// value doesn't change
let e1 = 10;
let e2 = e1;
e1 = 20;
console.log(e1);
console.log(e2);

// value changes
let e3 = {value: 10};
let e4 = e3;
e3.value = 20;
console.log(e3);
console.log(e4);

// ***** IMPORTANT ********
// Conclusion:
// Primitives are copied by their value
// Objects are copied by their reference

let e5 = 10;
let e6 = {value: 10};

// e5 in the function will simply go out of scope once exit the function
function increase(e5) {
    e5++; // primitives are copied by value
}
function increase(e6) {
    e6.value++; // primitives are copied by value
}

// Will not be incremented
increase(e5);
console.log(e5);
// Will be incremented
increase(e6);
console.log(e6);

// Scope
const message1 = 'hola';
{
    const message2 = 'hi'; // defined inside a code block, will not be detected outside
}
console.log(message1);
// console.log(message2); // this will creates a scope issue where it results
                          // in a reference error that says message2 is not defined

// The same concept applied to if-else statement, loop, and functions
// Variables outside of the code block will not be found

const color = 'red';

function start() {
    const message = 'hi';
    console.log(color); // in this case, the variable is accessible
}
function stop() {
    const message = 'bye';
    const color = 'blue'; 
    console.log(color); // this will print out blue instead of red
}

// ***** IMPORTANT ********
// Local variables or constants take precedance over global variables 
// or constants


// let / var / const
function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
        if (true) {
            var colorR = 'red'; // changing var to let will result in an error
        }
    }
    console.log(i); // This will result in an error if 'let' is used
                    // Will not be an error if 'var' is used
    console.log(colorR);
}
start();

// ***** IMPORTANT ********
// When you declare a variable using the keyword var, its scope is not limited
// to the block in which it is defined. It is only limited to the function in 
// which it is defined

var colorRED = 'red'; // window.colorRED => defined
let age = 30; // window.age => undefined

// When declare a variable using 'var' outside of a function, you create a 
// global variable and attach that global variable to the window object in
// browser 

// If you use 'let' to declare a variable, that variable will not attach to
// the window object

// There is only one instance of window object
// Variables can be easily overwrite by some other third-party website
// when attach to the window object


function sayHi() { // this is attached to the window object
    console.log('hi');
}
// there is a way to declare a function without attaching it to the window 
// object

// Conclusion:
// Avoid using the 'var' keyword

// Cloning an object
const shape = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const anotherShape = {};

// Method 1 of cloning
for (let key in shape)
    anotherShape[key] = shape[key];

// The loop above and the two lines of code below works the same way
// They both clone the object

// Method 2 of cloning
anotherShape['radius'] = shape['radius'];
anotherShape['draw'] = shape['draw'];

// Below should produce the same result
console.log('shape:', shape);
console.log( 'Method 2:', anotherShape);

// Method 3 of cloning
const anotherAnotherShape = Object.assign({}, shape);
console.log( 'Method 3:', anotherAnotherShape);

//Syntax: Object.assign(target, ...sources)
// You can put multiple objects in the source
// Target can be an empty object 
// Ex: const returnedTarget = Object.assign(target, source1, source2);
// Ex: const returnedTarget = Object.assign({}, source1);

// Method 4 of cloning
const anotherAnotherAnotherShape = {...shape};
console.log( 'Method 4:', anotherAnotherAnotherShape);
// Using the spread (...) operator
// It takes all the properties and functions and put it in the empty bracket list
// into the empty object

// Keyword this
// the object that is executing the current function 
// Method, a function in an object -> 'this' refers to the object itself
// Function, not part of an object -> 'this' refers to the global object, windown object

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
video.length = 90;
video.play(); // prints video object
video.stop = function() {
    console.log(this);
};
video.stop(); // print video object
// The above code prints out the video object itself

function playVideo() {
    console.log(this);
}
playVideo(); 
// prints window object

function Video(title) { // object constructor
    this.title = title;
    console.log(this);
}
const v = new Video("title1");
// prints out the video object
// Video object is different to video object

// new operator creates an empty object and sets the Video object properties 
// to the empty object

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            // console.log(this.title, tag); // will be undefined
            // 'this' will be undefined because you are inside a function that
            // is not method of the video2 object. So when you use this, it will
            // refer to the window object

            console.log(this.title, tag);
        }, this); // add 'this' in here to ensure it is refering to calling object
    }
};
video2.showTags();




























