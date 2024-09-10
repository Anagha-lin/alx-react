export default function accessImmutableObject(object, array) {
    // Traverse the object using the keys in the array
    return array.reduce((acc, key) => acc && acc[key], object);
}

