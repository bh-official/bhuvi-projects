console.log("Script loaded")


// creating arrays
const fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);


// assessing items in array

console.log(fruits[0]); // first item
console.log(fruits[2]); // third item
console.log(fruits[fruits.length - 1]); // last item
console.log(fruits.length); // length of array
console.log(fruits.includes("banana")); // check if item exists
console.log(fruits.indexOf("mango")); // index of item
console.log(fruits.indexOf("grape")); // index of non-existing item
console.log(fruits.join(", ")); // join items into a string
console.log(fruits.toString()); // convert array to string


console.log(fruits.slice(1, 4)); // slice array from index 1 to 2


console.log(fruits.reverse()); // reverse the array
console.log(fruits.sort()); // sort the array
console.log(fruits.sort().reverse()); // sort in descending order
console.log(Array.isArray(fruits)); // check if variable is an array
console.log(fruits.concat(["grape", "kiwi"])); // concatenate arrays
console.log(fruits.fill("kiwi", 1, 3)); // fill array with a value from index 1 to 2
console.log(fruits.flat()); // flatten nested arrays
console.log(fruits.flatMap(fruit => [fruit.toUpperCase()])); // flatMap example


// Creating an array of blog post titles
const blogPosts = [
"My first blog post",
"My second blog post",
"My third blog post"
];

blogPosts[3] = "My fourth blog post"; // adding a new item

console.log(blogPosts);
blogPosts[1] = "Updated second blog post"; // updating an item
blogPosts.push("My fifth blog post"); // adding an item at the end
const removedPost = blogPosts.pop(); // removing the last item
console.log("Removed post:", removedPost);

blogPosts.shift(); // removing the first item
blogPosts.unshift("New first blog post"); // adding an item at the beginning

console.log(blogPosts);
blogPosts.unshift
("Introduction to my blog"); // adding another item at the beginning
console.log(blogPosts);

blogPosts[3] = "Updated fourth blog post"; // updating an item
console.log(blogPosts);

const splicedPosts = blogPosts.splice(2, 2, "Replaced third blog post"); // removing and adding items
console.log("Spliced posts:", splicedPosts);
console.log(blogPosts);


// Assessing items in blogPosts array
console.log(blogPosts[0]); // first blog post
console.log(blogPosts[1]); // second blog post
console.log(blogPosts[blogPosts.length - 1]); // last blog post
console.log(blogPosts.length); // number of blog posts
console.log(blogPosts.includes("My second blog post")); // check if a blog post exists
console.log(blogPosts.indexOf("My third blog post")); // index of a blog post
console.log(blogPosts.join(" | ")); // join blog post titles into a string
console.log(blogPosts.toString()); // convert blogPosts array to string

// Creating an array with mixed data types
const randomList=["important remainder", 42, ["nested", "array"], {key: "value", id: 1}, true];

console.log(randomList);
console.log(randomList[2][1]); // accessing the first item
console.log(randomList[3].id); // accessing the value of key in the object
console.log(randomList[4]); // accessing the boolean value

favouriteFoods = ["pizza", "sushi", "ice cream"];
console.log(favouriteFoods[2])  // accessing the third item in the array;

FavoutiteColors = ["blue", "green", "red"];
console.log(FavoutiteColors.length)  // getting the length of the array;
console.log(FavoutiteColors.includes("yellow"))  // checking if "yellow" is in the array;
console.log(FavoutiteColors.indexOf("green"))  // getting the index of "green" in the array;
console.log(FavoutiteColors[1]); // accessing the second item in the array;

favouriteNumbers = [7, 42, 3.14, 100];
console.log(favouriteNumbers)



const myArray3 = [function(fname) { console.log(`Hello, ${fname}`); }];
myArray3[0](`Bhuvi`); // calling the function stored in the array