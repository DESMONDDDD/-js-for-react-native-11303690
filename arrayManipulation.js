
// arrayManipulation.js

/**
 * Function to process an array of numbers.
 * Squares even numbers and triples odd numbers.
 * @param {number[]} arr - Array of numbers.
 * @returns {number[]} - Processed array.
 */
function processArray(arr) {
  return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

/**
* Function to format an array of strings based on the corresponding array of numbers.
* Capitalizes strings if the corresponding number is even, converts to lowercase if odd.
* @param {string[]} stringArr - Array of strings.
* @param {number[]} numArr - Array of numbers processed by processArray.
* @returns {string[]} - Formatted array of strings.
*/
function formatArrayStrings(stringArr, numArr) {
  return stringArr.map((str, index) => (numArr[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()));
}

// Test cases
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log('Processed Numbers:', processedNumbers);

const strings = ["Hello", "My", "Name", "Is", "Desmond"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log('Formatted Strings:', formattedStrings);

module.exports = { processArray, formatArrayStrings };
