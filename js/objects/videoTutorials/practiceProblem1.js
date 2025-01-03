/* You are tasked with creating a factory function to generate employee objects for a company. 
    Each employee object should have the following properties:

name: The name of the employee.
position: The position/title of the employee.
salary: The salary of the employee.
 
Write a factory function called createEmployee that takes in three parameters (name, position, and salary)
 and returns an object representing an employee with these properties.
*/

function createEmployee(name, position, salary){
    const employee = {name, position, salary};
    return employee;
}
const employee1 = createEmployee("Alice", "Software Engineer", 60000);
console.log(employee1)