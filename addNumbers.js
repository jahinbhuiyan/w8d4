const readline = require('readline');

// Create a global variable for reader
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the function to add numbers
function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    // Prompt the user for a number
    reader.question('Enter a number: ', (input) => {
      // Parse the input and add to the sum
      const num = parseInt(input);
      sum += num;

      // Log the current sum
      console.log(`Partial sum: ${sum}`);

      // Recursively call addNumbers with the updated sum and decreased numsLeft
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    // Call the completionCallback with the total sum
    completionCallback(sum);

    // Close the reader
    reader.close();
  }
}