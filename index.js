const inquirer = require("inquirer");
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

// function addDepartment() {
//   store.addDepartment().then((data) => {
//     console.log(data[0]);
//   });
// }

// function addRole() {
//   store.addRole().then((data) => {
//     console.log(data[0]);
//   });
// }

function addEmployees() {
  store.addEmployees().then((data) => {
    console.log('test');
    
  });
}


// function ChangeRole() {
//   store.ChangeRole().then((data) => {
//     console.log(data[0]);
//   });
// }
const inquirer = require("inquirer");
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

// function addDepartment() {
//   store.addDepartment().then((data) => {
//     console.log(data[0]);
//   });
// }

// function addRole() {
//   store.addRole().then((data) => {
//     console.log(data[0]);
//   });
// }

function addEmployees() {
  store.addEmployees().then((data) => {
    console.log('test');
    
  });
}


// function ChangeRole() {
//   store.ChangeRole().then((data) => {
//     console.log(data[0]);
//   });
// }
