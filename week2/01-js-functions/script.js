console.log("Hello, World!");

// let a=5;
// let b=10;

// function add(a, b) {
//     return a + b;
// }
// console.log("The sum of a and b is:", add(a, b));


// const myName = `Bhuvanesh`;
// function greet(myName) {
//     return `Hello, ${myName}!`;
// }
// console.log(greet(myName));


// console.log("This is a simple JavaScript file demonstrating functions.");
// const x = 5
// function addition(y) {
//     console.log(x + y)
//     return x + y;
// }
// console.log("The result of addition is:", addition(15));

let firstNumber = 71;

 console.log("First Number is:", firstNumber);
  let secondNumber = parseInt(prompt("Enter the second number:"));
  console.log("Second Number is:", secondNumber);
// function alertTheNumber(number) {
//     alert(`The number you entered is: ${number}`);
// }

// alertTheNumber(firstNumber);
// alertTheNumber(secondNumber);
// alertTheNumber(42);
// console.log("End of the script.");

// console.log("First Number is:", firstNumber);
// console.log("Second Number is:", secondNumber);

function add1(firstNumber, secondNumber) {
    // console.log(firstNumber + secondNumber);
     return firstNumber + secondNumber;
}
console.log("the sum is:", add1(firstNumber, secondNumber));

const l=10;
const m=20;
function add2(l,m){
    return l+m;
}
console.log("The sum of l and m is:", add2(l,m));

function hello() {
    console.log("Hello, World!");
}


hello()

function argument(arg1, arg2) {
    return arg1 + arg2;
}
argument(5, 10);

console.log("The sum of arg1 and arg2 is:", argument(5, 10));



function uName(anyname) {
    console.log(`Hello, ${anyname}!`);
    return `Hello, ${anyname}!`;    
}
uName("Bhuvanesh");
uName("Alice");
uName("Bob");





function greet(greeting, uName) {
    return `${greeting}, ${uName}!`;
}

console.log(greet("Hi", "Bhuvanesh"));
console.log(greet("Welcome", "Alice"));
console.log(greet("Good Morning", "Bob"));
console.log("End of the Script.");




function add4(num1, num2) {
    return num1 + num2;
}

const result= add4(20, 30);
console.log("The result of add4 is:", result);
const result2= add4(100, 200);
console.log("The result2 of add4 is:", result2);
console.log("End of the Script.");



const a=100;
const b=50;

function add(a, b) {
    
    return a + b
}
function subtract(a, b) {
       
    return a - b
}
function multiply(a, b) {
    
    return a * b
}
function divide(a, b) {
    
    return a / b
}



function calculate(a, b, operator) {
    if (operator === "subtract") {
                return subtract(a, b)
} else if (operator === "multiply") {

        return multiply(a, b)
} else if (operator === "divide") {

        return divide(a, b)
    }   else if (operator === "add") {

        return add(a, b)
    } else {
        return "Invalid operator";
    }
}

console.log("The result of subtration is:", calculate(a, b, "subtract"));

console.log("The result of multiplication is:", calculate(a, b, "multiply"));  

console.log("The result of division is:", calculate(a, b, "divide"));

console.log("The result of addition is:", calculate(a, b, "add"));
console.log("End of the Script.");





function numToKm(num) {
    return num * 1.60934;
}
numToKm(10);
numToKm(25);
numToKm(50);

console.log("10 miles is:", numToKm(10), "kilometers");
console.log("25 miles is:", numToKm(25), "kilometers");
console.log("50 miles is:", numToKm(50), "kilometers");
console.log("End of the Script.");






function numToConvert(num, unit) {
    return num * 1.60934;
}

function convert(num, unit) {
    if (unit === "miles") {
        return num * 1.60934;
    } else if (unit === "kilometers") {
        return num / 0.621371;
    } else {
        return "Invalid unit";
    }
}


console.log("10 miles is:", numToConvert(10, "miles"), "kilometers");
console.log("25 kilometers is:", numToConvert(25, "kilometers"), "miles");
console.log("50 miles is:", numToConvert(50, "miles"), "kilometers");
console.log("100 kilometers is:", numToConvert(100, "kilometers"), "miles");
console.log("0.231 miles is:", convert(0.231, "miles"), "kilometers");
console.log("-40 kilometers is:", convert(-40, "kilometers"), "miles");
console.log("The End of the Script.");