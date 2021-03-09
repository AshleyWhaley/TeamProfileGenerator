const { type } = require("os");

class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        
    }
    getName() {
        return this.name;
    }
    getEmail(){
        return this.email
    }
    getID(){
        return this.ID;
    }
    getRole(){
        return "Employee";
    };
}

module.exports = Employee;