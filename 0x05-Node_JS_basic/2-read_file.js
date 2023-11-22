const fs = require('fs');

function countStudents(path) {
  try {
    if (!fs.existsSync(path)) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(path, 'utf8');
    console.log(data); // Log file content (for debugging purposes)
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if there are any valid student records
    if (lines.length <= 1) {
      throw new Error('No valid student records found in the database');
    }

    const students = lines.map((line) => line.split(','));
    const headers = students[0];
    const studentData = students.slice(1);

    console.log(`Number of students: ${studentData.length}`);

    headers.forEach((field, index) => {
      const fieldData = studentData.map((student) => student[index]).filter(Boolean);
      const uniqueFieldData = [...new Set(fieldData)];
      console.log(`Number of students in ${field}: ${uniqueFieldData.length}. List: ${uniqueFieldData.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
