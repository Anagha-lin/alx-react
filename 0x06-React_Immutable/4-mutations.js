// Import Map from Immutable.js
import { Map } from 'immutable';

// Create the initial Immutable Map
export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Create map2 by chaining mutations on map
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

