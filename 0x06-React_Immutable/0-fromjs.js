// Import Immutable.js library
const { fromJS } = require('immutable');

// Function to convert a JS object to an Immutable Map
function getImmutableObject(obj) {
    return fromJS(obj);
}

// Export the function
module.exports = getImmutableObject;

