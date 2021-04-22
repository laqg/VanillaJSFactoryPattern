import "./styles.css";
import { addEmployee, renderEmployees } from "./helpers/employeeFunctions";

document.getElementById("app").innerHTML = `
<h1>Factory Pattern</h1>
<div>
  <span>Name</span>
  <input type='text' id='employeeName'/>
  <small><i id='errorMessage'></i></small>
  <br/>
  <span>Type</span>
  <select name="employee" id="employeeType">
    <option value="developer">Developer</option>
    <option value="tester">Tester</option>
  </select>
  <br/>
  <button id='addEmployeeBtn'>Add employee</button>
  <br/>
  <h4>Employees</h4>
  <div id='employeeList'></div>
</div>
`;

document
  .getElementById("addEmployeeBtn")
  .addEventListener("click", addEmployee);

renderEmployees();
