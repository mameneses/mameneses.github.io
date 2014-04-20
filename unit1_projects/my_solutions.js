// I completed this challenge by my self.




// Pseudocode
// Create a variable called secretNumber and make is a number equal to 7.
// Create a variable called password and set it equal to the string "just open 
// 	the door"
// Create a variable called allowedIn and make it a false boolean by asking if 
// 	secretNumber less than zero.
// Create a variable called members which is an array where the first element 
// 	is 'John' and the forth element is 'Mary'.
// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = secretNumber<0;
var members = ['John', 'Emma', 'Matias', 'Mary'];
// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// the variable secretNumber test is satisfied by making it a number and specifically the number 7
// The variable password test is satisfied by making a string and specifically "just open the door"
// The variable allowedIn test is satisfied by making it a boolean that is false
// the variable members test is satisfied by making it an array with the first element 'John' and the forth element 'Mary'.
// the code is concise and the variable names are appropriate to satisfy the test
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I this was an effective way to understand Test Driven Development.
// I did not run into many problems, just understanding the concepts at first.
// While coding Ii did not have any questions, it was straightforward by looking
// at the ERROR strings what was need to correct the Error. I was having a small
// issues with writing a correct false boolean statement before actually defining
// the variable, as well as, forgetting to make the elements of my arrays strings.
// I a little unclear on how to write my own test for my specific programs but i 
// think that has much to do with my lack of experience with JavaScript. I enjoyed
// solving the "puzzle" to create true statements but found it tedious to justify 
// my original code.
// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
