interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // an array of students
  const studentsList: Student[] = [student1, student2];
  