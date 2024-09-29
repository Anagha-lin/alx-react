// src/schema/courses.js
import { schema, normalize } from 'normalizr';

// Define a course schema
const course = new schema.Entity('courses');

// Function to normalize courses
export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};

