// Import is and Map from Immutable.js
import { is, Map } from 'immutable';

// Function to compare two Maps for equality
export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

