// Import List from Immutable.js
import { List } from 'immutable';

// Function to convert an array into an Immutable List
export function getListObject(array) {
    return List(array);
}

// Function to append an element to the Immutable List
export function addElementToList(list, element) {
    return list.push(element);
}

