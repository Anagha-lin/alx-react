// Import Seq from Immutable.js
import { Seq } from 'immutable';

// Function to print best students (with score >= 70)
export function printBestStudents(grades) {
  // Convert the object to a Seq
  const studentsSeq = Seq(grades);

  // Filter students with score >= 70
  const filteredStudents = studentsSeq.filter(student => student.score >= 70);

  // Capitalize first and last names
  const formattedStudents = filteredStudents.map(student => ({
    score: student.score,
    firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
    lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
  }));

  // Convert to JS object and print
  console.log(formattedStudents.toJS());
}

