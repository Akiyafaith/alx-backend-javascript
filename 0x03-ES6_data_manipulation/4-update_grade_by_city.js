function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (studentGrade) {
        return {
          ...student,
          grade: studentGrade.grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
