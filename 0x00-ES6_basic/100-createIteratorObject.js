export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]: function* () {
      for (const department in report.allEmployees) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    },
  };

  return iterator;
}
