// Practise Exercise 5.1
// Step 1: Create a variable for the max value
// var maxValue = 100; // Change this to your desired max value

// // Step 2: Generate a random number for the solution
// var solution = Math.floor(Math.random() * maxValue) + 1;

// // Log the solution to the console for development
// console.log("Solution:", solution);

// // Comment out the console output when the game is complete
// // console.log("Solution:", solution);

// // Now you can use the 'solution' variable in your number guessing game logic.
// import random

// # Step 3: Create a variable for tracking correctness
// is_correct = False

// # Generate a random number between 1 and 5
// solution_number = random.randint(1, 5)

// # Step 4: Use a while loop to iterate the prompt
// while not is_correct:
//     # Prompt user to enter a number between 1 and 5
//     user_guess = input("Enter a number between 1 and 5: ")

//     # Convert user input to a number
//     try:
//         user_guess = int(user_guess)
//     except ValueError:
//         print("Please enter a valid number.")
//         continue

//     # Step 5: Check if the guess is correct
//     if user_guess == solution_number:
//         is_correct = True
//         print("Congratulations! Your guess is correct.")
//     else:
//         # Provide feedback on whether the guess was high or low
//         if user_guess < solution_number:
//             print("Try again. Your guess is too low.")
//         else:
//             print("Try again. Your guess is too high.")

// # End of the loop
// Exercise 5.2
// // Step 1: Set the starting counter to 0
// let counter = 0;

// // Step 2: Create a variable, step, to increase your counter by
// let step = 5; // You can adjust the step value according to your requirement

// // Step 3: Add a do-while loop
// do {
//     // Print the counter to the console
//     console.log("Counter:", counter);

//     // Increment the counter by the step amount each loop
//     counter += step;

// // Step 4: Continue to loop until the counter is equal to 100 or more than 100
// } while (counter < 100);

// // Optional: You can print a message after the loop completes
// console.log("Loop completed!");
// Exercise 5.3
// Step 1: Setup a blank array, myWork.
// let myWork = [];

// // Step 2-5: Using a for loop, create and push lessons to the array.
// for (let i = 1; i <= 10; i++) {
//     // Step 3: Use a ternary operator to alternate true/false status.
//     let status = i % 2 === 0 ? true : false;

//     // Step 4: Create a lesson using a temporary object variable.
//     let lesson = {
//         name: 'Lesson ' + i,
//         status: status
//     };

//     // Step 5: Push the objects to the myWork array.
//     myWork.push(lesson);
// }

// // Step 6: Output the array to the console.
// console.log(myWork);
// Exercise 5.4
// Step 1: Create an empty array to hold table data
// let myTable = [];

// // Step 2: Set variable values for the number of rows and columns
// const numRows = 3;
// const numCols = 4;

// // Step 3: Set up a counter variable
// let counter = 0;

// // Step 4: Create a loop for rows
// for (let i = 0; i < numRows; i++) {
//     // Create a temporary array for each row
//     let tempRow = [];

//     // Step 5: Nest a loop for columns
//     for (let j = 0; j < numCols; j++) {
//         // Fill each cell with some content (using the counter for demonstration)
//         tempRow.push(`Cell ${counter}`);
//         counter++;
//     }

//     // Add the row to the main table array
//     myTable.push(tempRow);
// }

// // Print the generated table
// console.log(myTable);
// // Step 6: Initialize the main counter
// let mainCounter = 1;

// // Step 7: Create and populate the table
// let myTable = [];

// for (let i = 0; i < numberOfRows; i++) {
//   // Temporary array to store row values
//   let tempTable = [];

//   for (let j = 0; j < numberOfCells; j++) {
//     // Increment the main counter each iteration of the inner loop
//     mainCounter++;

//     // Push the counter values to the temporary array
//     tempTable.push(mainCounter);
//   }

//   // Step 8: Push the temporary array to the main table
//   myTable.push(tempTable);
// }

// // Step 9: Output the table structure to the console
// console.table(myTable);
// Exercise 5.5
// Step 1: Create a grid array variable
// let grid = [];

// // Step 2: Set a value of 64 for the number of cells
// const numberOfCells = 64;

// // Step 3: Set a counter to 0
// let counter = 0;

// // Initialize the grid with 64 cells
// for (let i = 0; i < numberOfCells; i++) {
//   // You can initialize each cell with a specific value if needed
//   grid.push(/* Initial cell value, if any */);
// }

// // Now, you have a grid array with 64 cells, and the counter is set to 0.
// // Step 4: Create a global variable for the row array
// let row = [];

// // Step 5: Create a loop that iterates up to the number of cells you want in the array
// for (let i = 1; i <= 64 + 1; i++) {
//   // Step 6: Add an outer if statement to check if the counter is divisible by 8
//   if (i % 8 === 0) {
//     // Step 7: Inside the outer if statement, check if the row is undefined
//     if (typeof row !== 'undefined') {
//       // Add the row to the main grid array
//       mainGrid.push([...row]);
//     }
//     // Clear the row array
//     row = [];
//   }

//   // Step 9: Increment the main counter by 1
//   // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array
//   let temp = i;
//   row.push(temp);

//   // Step 11: Check if the value of the counter is equal to the total number of columns
//   if (i === 8) {
//     // Add the current row to the grid
//     mainGrid.push([...row]);
//   }
// }

// // Step 13: Output the grid into the console
// console.log(mainGrid);
// eXERCISE 5.6
// 1. Create an empty array
// let myArray = [];

// // 2. Run a loop 10 times, adding a new incrementing value to the array
// for (let i = 0; i < 10; i++) {
//     myArray.push(i);
// }

// // 3. Log the array into the console
// console.log("Array:", myArray);

// // 4. Use the for loop to iterate through the array
// for (let j = 0; j < myArray.length; j++) {
//     console.log("For Loop - Element at index", j, ":", myArray[j]);
// }

// // 5. Use the for of loop to output the value into the console from the array
// for (let element of myArray) {
//     console.log("For Of Loop - Element:", element);
// }
// eXERCISE 5.7
// Creating a simple object with three items
// let myObject = {
//   item1: 'Apple',
//   item2: 42,
//   item3: true
// };
// // Using the for-in loop to get property names and values from the object
// for (let key in myObject) {
//   console.log(`Property Name: ${key}, Value: ${myObject[key]}`);
// }
// Property Name: item1, Value: Apple
// Property Name: item2, Value: 42
// Property Name: item3, Value: true
// // Creating an array with the same three items
// let myArray = ['Banana', 17, false];

// // Using a for loop to output values from the array
// for (let i = 0; i < myArray.length; i++) {
//   console.log(`Array Item ${i + 1}: ${myArray[i]}`);
// }
// Array Item 1: Banana
// Array Item 2: 17
// Array Item 3: false
// Exercise 5.8
// Step 1: Set up a string variable to use as output.
// let output = "";

// // Step 2: Select a number to skip, and set that number as a variable.
// const skipNumber = 3;

// // Step 3: Create a for loop that counts to 10.
// for (let i = 1; i <= 10; i++) {
//   // Step 4: Add a condition to check if the value of the looped variable is equal to the number that should be skipped.
//   if (i === skipNumber) {
//     // Step 5: If the number is to be skipped in the condition, continue to the next number.
//     continue;
//   }

//   // Step 6: As you iterate through the values, append the new count value to the end of the main output variable.
//   output += i + " ";
// }

// // Step 7: Output the main variable after the loop completes.
// console.log("Output with 'continue':", output);

// Step 8: Reuse the code, but change the continue to break and see the difference. It should now stop at the skip value.
// output = ""; // Reset the output variable

// for (let i = 1; i <= 10; i++) {
//   if (i === skipNumber) {
//     // Change 'continue' to 'break'
//     break;
//   }

//   output += i + " ";
// }

// console.log("Output with 'break':", output);

// Chapter Project
// Math Multiplication Table
// Step 1: Set up a blank array to contain the final multiplication table.
// let multiplicationTable = [];

// // Step 2: Set a value variable to specify how many values you want to multiply.
// let value = 10;

// // Step 3: Create an outer for loop to iterate through each row.
// for (let i = 1; i <= value; i++) {
//     // Create a temporary array to store the row values.
//     let tempRow = [];

//     // Step 4: Add an inner for loop for the column values.
//     for (let j = 1; j <= value; j++) {
//         // Multiply row and column values and push to the temp array.
//         tempRow.push(i * j);
//     }

//     // Step 5: Add the temporary row data to the main array.
//     multiplicationTable.push(tempRow);
// }

// // Display the final multiplication table.
// for (let i = 0; i < multiplicationTable.length; i++) {
//     console.log(multiplicationTable[i].join('\t'));
// }





































