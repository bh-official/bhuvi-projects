console.log("This is vowels.js file");

// Return the number (count) of vowels in the given string.

function countVowels(str) {
    // Convert the string to lowercase to make the function case-insensitive
    str = str.toLowerCase();
    let count = 0;
    const vowels = "aeiou";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
const exampleString = prompt("Enter a string to count vowels:");
console.log(`Number of vowels in "${exampleString}":`, countVowels(exampleString));



console.log("This is the end of vowels.js file");