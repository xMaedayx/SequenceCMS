const db = require("./connection")
const inquirer = require("inquirer");
const store = require('./call');


class Store {
    constructor(db){
        this.db = db
    }

    retrieve_department() {
        return this.db.promise().query("SELECT * FROM department")
    }

    retrieve_roles() {
        return this.db.promise().query("SELECT * FROM role")
    }
    retrieve_employees() {
        return this.db.promise().query("SELECT * FROM employee")
    }

    async addEmployees(employee, callback) { 
        //console.log('test');
        
        const roleName = await db.promise().query('SELECT title FROM role;');
        
     
        const empName = await db.promise().query('SELECT first_name, last_name FROM EMPLOYEE;');
   
        console.log(roleName[0]);
        console.log(empName[0]);
        const data = await inquirer 
        .prompt([
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
      /*  async addDepartment() { 
            // console.log('test');
            const nameOfDepartment = await db.promise().query();
         

         console.log(nameOfDepartment[0]);
         const data = await inquirer 
         .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Input the name of the department'
            }
         ]),
         .then(function (answer) {
            console.log("answer", answer.departmentId)
         })
        
         async addRole() { 
            //console.log('test');
            const role = await db.promise().query('SELECT title FROM role;'); /* <------ wrong */
           /* console.log(role[0]); <----- /* test */
           /* const data = await inquirer 
                .prompt([
                    {
                        type: "input",
                        name: "title",
                        message: "Input Title of Role."
                    },
                    {
                        type: "input",
                        name: "salary",
                        message:"Input average salary of the role.",
                    },
                    {
                        type: "input",
                        name: "department_id",
                        message:"Input department_id of the role.",

                    }
                ])          
            }
        


            

async 

        
        //const results =  await db.promise().query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${data.firstName}","${data.lastName}", "${data.role_id}", "${data.manager_id}")`);
        const results = db.promise().query(query1)
        console.log(results)


        if (results) {
            console.log('SUCCESS!')
            
        }
        return results
    }
} */


module.exports= new Store(db)




// INSERT INTO employee (first_name, last_name, email, password, location, dept, is_admin, register_date) values ('Fred', 'Smith', 'fred@gmail.com', '123456', 'New York', 'design', 0, now()), ('Sara', 'Watson', 'sara@gmail.com', '123456', 'New York', 'design', 0, now()),('Will', 'Jackson', 'will@yahoo.com', '123456', 'Rhode Island', 'development', 1, now()),('Paula', 'Johnson', 'paula@yahoo.com', '123456', 'Massachusetts', 'sales', 0, now()),('Tom', 'Spears', 'tom@yahoo.com', '123456', 'Massachusetts', 'sales', 0, now());