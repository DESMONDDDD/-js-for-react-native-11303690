// userInfo.js

const { processArray, formatArrayStrings } = require('./arrayManipulation');

/**
 * Function to create user profiles.
 * @param {string[]} names - Array of original names.
 * @param {string[]} modifiedNames - Array of modified names.
 * @returns {Object[]} - Array of user profiles with originalName, modifiedName, and id.
 */
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
const names = ["Desmond", "Clinton", "Felicity", "Mary", "Augustine"];
const numbers = [1, 2, 3, 4, 5];

const processedNumbers = processArray(numbers); // Task 1
const formattedNames = formatArrayStrings(names, processedNumbers); // Task 2
const userProfiles = createUserProfiles(names, formattedNames); // Task 3

console.log('User Profiles:', userProfiles);

module.exports = { createUserProfiles };
