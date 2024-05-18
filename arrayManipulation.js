
// arrayManipulation.js
function processArray(arr) {
  return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

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
