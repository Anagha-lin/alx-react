// Import List and Map from Immutable.js
import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  return List(page1).concat(page2);
}

// Function to merge two objects into an Immutable Map
export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}

