const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if there are any valid student records
    if (lines.length <= 1) {
      throw new Error('No valid student records found in the database');
    }

    const students = lines.map((line) => line.split(','));
    const headers = students[0];
    const studentData = students.slice(1);

    console.log(`Number of students: ${studentData.length}`);

    const studentCounts = {};

    headers.forEach((field, index) => {
      const fieldData = studentData.map((student) => student[index]);
      const uniqueFieldData = [...new Set(fieldData.filter(Boolean))];
      studentCounts[field] = {
        count: uniqueFieldData.length,
        list: uniqueFieldData.join(', '),
      };
    });

    Object.entries(studentCounts).forEach(([field, { count, list }]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
