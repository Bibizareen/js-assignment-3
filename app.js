// Practise Exercise 6.1
// 1. Create a function that adds two parameters and returns the result.
// function addNumbers(a, b) {
//     return a + b;
//   }
  
//   // 2. Set up two different variables with two different values.
//   var num1 = 5;
//   var num2 = 8;
  
//   // 3. Use the function on the two variables and output the result.
//   var result1 = addNumbers(num1, num2);
//   console.log("Result of adding", num1, "and", num2, "is:", result1);
  
//   // 4. Create a second call to the function using two more numbers as arguments.
//   var num3 = 10;
//   var num4 = 3;
  
//   var result2 = addNumbers(num3, num4);
//   console.log("Result of adding", num3, "and", num4, "is:", result2);
//   Exercise 6.2
// 1. Create an array of descriptive words
// const descriptiveWords = ["creative", "adventurous", "energetic", "charming", "persistent", "insightful"];

// // 2. Create a function that contains a prompt asking the user for a name
// function getRandomDescriptiveWord() {
//     // 2.1 Ask the user for a name
//     const userName = prompt("Enter your name:");

//     // 3. Select a random value from the array using Math.random
//     const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
//     const randomDescriptiveWord = descriptiveWords[randomIndex];

//     // 4. Output into the console the prompt value and the randomly selected array value
//     console.log(`Hello, ${userName}! You are a ${randomDescriptiveWord} person.`);
// }

// // 5. Invoke the function
// getRandomDescriptiveWord();
// Exercise 6.3
// Step 1: Set up two variables containing number values.
// let num1 = 5;
// let num2 = 3;

// // Step 2: Set up a variable to hold an operator, either + or -.
// let operator = '+';

// // Step 3: Create a function that retrieves the two values and the operator string value within its parameters.
// function calculateValues(value1, value2, operator) {
//     // Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly.
//     if (operator === '+') {
//         return value1 + value2;
//     } else if (operator === '-') {
//         return value1 - value2;
//     } else {
//         // If not presented with a valid operator, default to addition.
//         return value1 + value2;
//     }
// }

// // Step 4: Within console.log(), call the function using your variables and output the response to the console.
// console.log(`Result with operator ${operator}: ${calculateValues(num1, num2, operator)}`);

// // Step 5: Update the operator value to be the other operator type—either plus or minus—and call the function again with the new updated arguments.
// operator = '-'; // Update the operator to subtraction.
// console.log(`Result with updated operator ${operator}: ${calculateValues(num1, num2, operator)}`);
// Exercise 6.4
// Step 1: Set up an empty array
// let resultArray = [];

// // Step 2: Create a loop
// for (let i = 0; i < 10; i++) {
//   // For the first value, multiply the value of the loop count by 5
//   let value1 = i * 5;

//   // For the second value, multiply the value of the loop counter by itself
//   let value2 = i * i;

//   // Step 3: Create a function that adds the two parameters
//   function calculateSum(param1, param2) {
//     return param1 + param2;
//   }

//   // Step 4: Call the calculation function within the loop
//   // Step 5: Push the result values into the array
//   let response = calculateSum(value1, value2);
//   resultArray.push(response);
// }

// // Step 6: Output the value of the array into the console
// console.log(resultArray);
// Exercise 6.5
// Step 1
// let value = "1000";

// // Step 2
// (function() {
//   let value = "New Value from IIFE";
//   console.log("Local value within IIFE: " + value);
// })();

// // Step 3
// let result = (function() {
//   let value = "New Value from IIFE Expression";
//   console.log("Local value within IIFE Expression: " + value);
//   return value;
// })();

// console.log("Result variable: " + result);

// // Step 4
// let anonymousFunction = function(parameterValue) {
//   let value = parameterValue;
//   console.log("Value from anonymous function: " + value);
// };

// // Invoke the anonymous function and pass in a desired value
// anonymousFunction("New Value from Anonymous Function");
// Exercise 6.6
// function factorial(value) {
//     // Base case: if the value is 0, return 1
//     if (value === 0) {
//         return 1;
//     } else {
//         // Recursive case: multiply the value by the result of the function with (value - 1)
//         let result = value * factorial(value - 1);

//         // Print the current value of the argument
//         console.log(`Current value: ${value}`);

//         // Return the result of the multiplication
//         return result;
//     }
// }

// // Replace the argument with the number for which you want to find the factorial
// let numberToFactorialize = 5;
// let result = factorial(numberToFactorialize);

// // Output the final result
// console.log(`Factorial of ${numberToFactorialize} is: ${result}`);
// Exercise 6.7
// Step 1: Set the start variable
// let start = 10;

// // Step 2-8: Create a countdown function
// function countdown(value) {
//   // Step 3: Output current value
//   console.log(value);

//   // Step 4: Check if value is less than 1
//   if (value < 1) {
//     // Step 9: Use return to exit the function
//     return;
//   }

//   // Step 5-6: Continue looping by calling the function within itself
//   countdown(value - 1);
// }

// // Step 7-8: Create a second countdown using a condition
// function countdown2(value) {
//   // Step 3: Output current value
//   console.log(value);

//   // Step 7: Check if value is greater than 0
//   if (value > 0) {
//     // Step 8: Decrease the value and continue the loop
//     return countdown2(value - 1);
//   }
// }

// // Step 9: Call the functions with the start variable
// countdown(start);
// countdown2(start);
// Exercise 6.8
// // 1. Function expression
// const myFunctionExpression = function (arg) {
//     console.log(arg);
// };

// // 2. Pass an argument into the function expression
// myFunctionExpression("Hello from function expression!");

// // 3. Normal function declaration
// function myFunctionDeclaration(arg) {
//     console.log(arg);
// }

// // 4. Pass an argument into the function declaration
// myFunctionDeclaration("Hello from function declaration!");
// Chapter Project
// Create a recursive Function
// function countUpTo10(startNumber) {
//     // Base case: stop recursion when startNumber is greater than 10
//     if (startNumber > 10) {
//       return;
//     }
  
//     // Output the current number
//     console.log(startNumber);
  
//     // Recursive call with the next number
//     countUpTo10(startNumber + 1);
//   }
  
//   // Example invocations with different start numbers
//   console.log("Counting up to 10 starting from 1:");
//   countUpTo10(1);
  
//   console.log("\nCounting up to 10 starting from 5:");
//   countUpTo10(5);
  
//   console.log("\nCounting up to 10 starting from 8:");
//   countUpTo10(8);
//   Set Timeout Order
// Function to output the value one to the console
// const outputOne = () => {
//     console.log(1);
//   };
  
//   // Function to output the value two to the console
//   const outputTwo = () => {
//     console.log(2);
//   };
  
//   // Function to output the value three to the console and invoke the first two functions
//   const outputThreeAndInvoke = () => {
//     console.log(3);
//     outputOne();
//     outputTwo();
//   };
  
//   // Function to output the word four to the console and use setTimeout() to invoke the first and third functions
//   const outputFourAndInvoke = () => {
//     console.log('four');
  
//     // Using setTimeout to invoke outputOne immediately
//     setTimeout(() => {
//       outputOne();
//     }, 0);
  
//     // Using setTimeout to invoke outputThreeAndInvoke after a delay of 1000 milliseconds (1 second)
//     setTimeout(() => {
//       outputThreeAndInvoke();
//     }, 1000);
//   };
  
//   // Invoking the fourth function
//   outputFourAndInvoke();
  


