import { EmployeeFactory } from "./employeeFactory";
import errorMessage from "./errorMessage";

const employeeFactory = new EmployeeFactory();

let employees = [];

export function renderEmployees() {
  let employeeList = "";
  employees.forEach((employee) => {
    let newEmployee = `<p id=employee${employee.index}'>${employee.name} <small>${employee.type}</small>`;
    newEmployee += `<button id=removeEmployee${employee.index}>X</button>`;
    employeeList += newEmployee;
  });
  document.getElementById("employeeList").innerHTML =
    employeeList === ""
      ? "<small><i>No employees here...</i></small>"
      : employeeList;
  employees.forEach((employee) => {
    document
      .getElementById(`removeEmployee${employee.index}`)
      .addEventListener("click", function () {
        removeEmployee(employee.index);
      });
  });
}

function removeEmployee(index) {
  employees = [...employees.filter((employee) => employee.index !== index)];
  renderEmployees();
}

export function addEmployee() {
  const name = document.getElementById("employeeName");
  const type = document.getElementById("employeeType");
  if (!name.value) {
    errorMessage("Enter a name");
  }
  if (name.value) {
    const inList = employees.some((employee) => employee.name === name.value);
    if (inList) {
      errorMessage("Employee already in list");
    }
    if (!inList) {
      const index = Array.from(employees).length;
      employees.push(employeeFactory.create(name.value, type.value, index));
      name.value = "";
      errorMessage("");
      renderEmployees();
    }
  }
}
