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
  
  //using vanilla js render a table
  const table = document.createElement("table")
  const tableBody = document.createElement("tr")

  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  table.appendChild(tableBody);
  
  // Append the table to the body of the HTML document
  document.body.appendChild(table);