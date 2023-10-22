class HolbertonCourse {
  constructor(name, length, students) {
    // check the type of attributes during object creation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || students.some((s) => typeof s !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Assign attributes to underscored versions
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter for the length attribute
  get length() {
    return this._length;
  }

  // Setter for the length attribute
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for the students attribute
  get students() {
    return this._students;
  }

  // Setter for the students attribute
  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((s) => typeof s === 'string')) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
