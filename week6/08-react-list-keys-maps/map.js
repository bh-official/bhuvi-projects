const array = [1, 2, 3, 4, 5];

const myNumbers = array.map((number) => {
    return number * 2;  
})

console.log(myNumbers); // Output: [2, 4, 6, 8, 10]

const myNumbers2 = array.map(function(number) {
    return number * 2;
})

console.log(myNumbers2); // Output: [2, 4, 6, 8, 10]

const myNumbers3 = array.map(number => number * 2);

console.log(myNumbers3); // Output: [2, 4, 6, 8, 10]