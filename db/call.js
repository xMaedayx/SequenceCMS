onst db = require("./connection")
const inquirer = require("inquirer");



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

    addEmployees(employee) {
        return this.db.promise().query("INSERT INTO employee SET ?", employee)
    }

    addDepartment(department) {
        return this.db.promise().query("INSERT INTO department SET ?", department)
    }

    UpdateEmployeeRole(employeeId, roleId) {
        return this.db.promise().query("UPDATE employee SET role_id = ? WHERE id = ?",[roleId,employeeId])
    }


    

}


    

module.exports= new Store(db)
    



