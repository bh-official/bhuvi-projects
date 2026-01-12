console.log("Script loaded");
let globalVar = "I am a global variable";

function checkScope() {
    let localVar = "I am a local variable";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

console.log(globalVar); // Accessible
checkScope();
console.log(globalVar); 
// console.log(localVar); // Accessible
// console.log(localVar);  // Unaccessible, would throw an error


console.log("End of script");


let myName = "Bhuvana";
console.log("My name is:", myName);

function greet() {
    let myFriend = "Alice";
    console.log("Hello, " + myFriend + "!");
    let myName = "Bhuvi";
    console.log(`Myself ${myName} and my friend is ${myFriend} planned to go out !!!`);
}

console.log(myName);
greet()
console.log(myName);
// console.log(myFriend); // Unaccessible, would throw an error

let favoriteColor = "blue";

function printColor() {
    let favoriteColor = "red";
    console.log("Favorite color inside function:", favoriteColor); // red
}
console.log("Favourite color beofre running the function is :", favoriteColor); // blue
printColor()
console.log("Favorite color outside function:", favoriteColor); // blue