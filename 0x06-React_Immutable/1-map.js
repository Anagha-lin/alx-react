// Import Immutable.js library
const { Map } = require('immutable');

// Function to convert a JS object to an Immutable Map
function getImmutableObject(obj) {
    return Map(obj);
}

// Export the function
module.exports = getImmutableObject;

