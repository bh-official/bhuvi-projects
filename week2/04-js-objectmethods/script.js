console.log("Hello, World!");


// creating objects

const person= {
    fname: "Bhuvi",
    age: 36,
    favouriteColour: "pink",
    sayHello: function() {
        console.log(`Hello, my name is ${this.fname}`);
    },

}

person.sayHello();


// Passing arguments to methods

const person1={
    fname: "Alice",
    age: 30,
    favouriteColour: "blue",
    sayHello: function(name) {
        console.log(`Hello, my name is ${name}`);
    },
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${person.fname}`);
    },
}

person1.sayHello("Alice");
person1.greet("Good morning");


// Returning values from methods

const person2={
    fname: "Bob",
    age: 25,
    favouriteColour: "green",
    getDetails: function() {
        return this.age;
    },
}

const age = person2.getDetails();
console.log ("Age:", age);
console.log(`age is ${age}`);


// Challenge 01


const car={
    make: "Toyota",
    model: "Camry",
    color: "red",
    year: 2020,
    advert: function(){
        return `For sale: ${this.year} ${this.color} ${this.make} ${this.model}`;
    },
}

console.log(car.advert());


// Challenge 02

const book={
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    advert: function(){
        return `Book: "${this.title}" by ${this.author}, ${this.pages} pages.`;
    },
};

console.log(book.advert());




