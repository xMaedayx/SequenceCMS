const inquirer = require("inquirer");
//const { UpdateEmployeeRole } = require("./db/call");
const store = require("./db/call");
const db = require("./db/connection");

//make sure connection is secure before start.
db.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("connected");
    menu();
  }
});

function menu() {
  inquirer
    .prompt([
      {
        name: "action",
        message: "Which query would you like to run",
        type: "list",
        choices: [
          "Display All Departments",
          "Display All Roles",
          "View All Employees",
          "Add An Employee",
          "Add A Department"
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Display All Departments":
          getAllDepartments();
          break;
        case "Display All Roles":
          getAllRoles();
          break;
        case "View All Employees":
          getEmployees();
          break;
         case "Add A Department":
           addDepartment();
           break;
         case "Add A Role":
           addRole();
           break;
        case "Add An Employee":
          addEmployees();
          break;
         case "Update An Employee Role":
           ChangeRole();
           break;
      }
    });
}

function getAllDepartments() {
  store.retrieve_department().then((departments) => {
    console.log(departments[0]);
    menu();
  });
}

function getAllRoles() {
  store.retrieve_roles().then((roles) => {
    console.log(roles[0]);
    menu();
  });
}

function getEmployees() {
  store.retrieve_employees().then((employee) => {
    console.log(employee[0]);
    menu();
  });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'What is the name of the department you would like to add?',
      
    }
  ]) 
  .then(answers => {
    let department = {
      department_name: answers.department_name
    }
    store.addDepartment(department)
    menu()
  })
  
}


function UpdateEmployeeRole() {
  inquirer.prompt([
  {
      type: 'input',
      name: 'employee_id',
      message: 'what is the id of the employee you would like to change?',
  },
  {
      type: 'input',
      name: 'role_id',
      message: 'what is the id of the role you would like to change to?',

  },
  ])
  .then(answers => {
    store.UpdateEmployeeRole(answers.employee_id, answers.role_id);
    menu();
  });
}





function addEmployees() {
inquirer.prompt([
      {
          type: 'input',
          name: 'first_name',
          message: 'What is the first name of the employee you would like to add?',
      },
      {
          type: 'input',
          name: 'last_name',
          message: 'What is the last name of the employee you would like to add?',

      },
      {
          type: 'role',
          name: 'role_id',
          message: "input the id for the role"

      },
      {
          type: 'manager',
          name: 'manager_id',
          message: "input name of Manager",
      }
      
  ]) 
  .then(answers => {
      let employee = {
        first_name: answers.first_name, last_name: answers.last_name, role_id: answers.role_id, manager_id: answers.manager_id

      }
      store.addEmployees(employee)
      menu()
  })
  }

 



