console.log("This is a callback function example.")


// Example 1
// Here we define a function that takes a parameter 'a'

function runsOtherFunctions(a) {
    console.log(a)
    // the parameter a IS whatever its argument was, so if its argument is a function, we can invoke that function
    a()
}

runsOtherFunctions(greet)


// Here we are passing in the 'greet' function. We refer to greet as a 'callback function' because it a function being passed to another function (runsOtherFunctions) as a argument
// runsOtherFunctions(greet)

function greet() {
    console.log(`Hello`)
}





// Example 2
// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback()
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser)


// Example 2  cont of 1 - Alternative syntax using anonymous function
// accepts a function as an argument to run when it has done it's work  


// function myAwesomeFunction(onCompleteCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   onCompleteCallback();
// }

// myAwesomeFunction(function () {
//   console.log("notifyUser function was called!");
// });



// myAwesomeFunction(() => {
//   console.log("notifyUser function was called!");
// });



// function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
// }

// Example 3:
