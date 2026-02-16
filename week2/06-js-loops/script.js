console.log("Loops in JavaScript");

// Example of a for loop
for(let i=0; i<5; i++){
    console.log("Iteration", i);
}


// Example of a for loop to print multiplication table of 3
for(let i=1; i<=10; i++){
    console.log(`3 x ${i} = ${3 * i}`);
}


// Example of a while loop
let count = 0;
while(count<=5){
    console.log("Count is:", count);
    count++;
}


// Multiplication of 5 using while loop
let num = 1;
while(num <= 10){
    console.log(`5 x ${num} = ${5 * num}`);
    num++;
}

// math.random() to generate random numbers between 0 and 1 using while loop

let keeplooping=false;
let i=0;
while(keeplooping===false){
    keeplooping=Math.random()<0.1;
    i++;
}
console.log("It took "+i+" iterations to generate a number less than 0.1");


// looping through an array using for loop

const foods = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
for(let i=0; i<foods.length; i++){
    console.log("I like", foods[i]);
}

// alternate way using for..of loop
for(const food of foods){
    console.log("I like", food);
}

const numbers = [10, 20, 30, 40, 50, Infinity];
for(const number of numbers){
    console.log("Number is:", number);
}

// alternate way using forEach method
foods.forEach(function(food){
    console.log("I like", food);
});


const foods2 = ["Tacos", "Ramen", "Curry", "Dumplings", "Paella"];
foods2.forEach(function(food){
    console.log("I like", food);
});

// indexed forEach
foods2.forEach(function(food, index){
    console.log(`Food item ${index+1}: ${food}`);
});


const myFriends = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(myFriends.length);

for(let i=0; i<myFriends.length; i++){
    console.log("Friend:", myFriends[i]);

const h2 =document.createElement("h2");
h2.innerText=myFriends[i]
document.body.append(h2)
}

// challenge 01
const animals = ["cat", "dog", "elephant", "giraffe", "lion"];
for(let i=0; i<animals.length; i++){
    console.log("Animal:", animals[i]);
}

// challenge 02
const colours = ["red", "blue", "green", "yellow", "purple"];
colours.forEach(function(colour){
    console.log("Colour:", colour);
});

// Challenge 03
const favnumbers2 = [2, 4, 6, 8, 10, Infinity];
while(favnumbers2.length > 0){
    const number = favnumbers2.shift();
    console.log("Favourite Number:", number);
}

const favnumbers = [1, 2, 3, 4, 5, Infinity];
while(favnumbers.length > 0){
    const number = favnumbers.pop();
    console.log("Favourite Number:", number);
}

// Create an array of your favourite numbers, loop over the array and log each item to the console. Infinity is a number in JavaScript. (But learn how to kill your browser tabs in task/activity manager before you loop until i = Infinity!) Try a while loop
const favnumbers3 = [3, 6, 9, 12, 15, Infinity];
let index = 0;
while(index < favnumbers3.length){
    console.log("Favourite Number:", favnumbers3[index]);
    index++;
}

// do while
// do{
//     unumber=prompt("Enter a number less than 10:");     
// } while(unumber>=10);
// console.log("You entered:", unumber);

// while
let usernumber=0;
while(usernumber<=10){
    console.log(usernumber);
    usernumber += 2;
    if(usernumber>10){
        break;
    }    
}
console.log("You entered:", usernumber);



// let isUserReady=false;
// while(!isUserReady){
//     isUserReady=prompt("Are you ready to quit?");
// }
// console.log("User is ready to quit.");

let yourName;  
do{
    yourName=prompt("Enter your name:");     
} while(!yourName);
console.log("Your name is:", yourName);