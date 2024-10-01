// Sample list of drivers
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// findMatching - returns matching drivers by name (case insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch - returns drivers that start with the given letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// matchName - checks if a name matches the list of drivers exactly
function matchName(drivers, name) {
  return drivers.filter(driver => driver === name);
}

// Tests (assuming you're using Mocha for testing)
const assert = require('assert');

// matchName - checks if a name matches the list of drivers' names
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  

