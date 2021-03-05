class Employee {
    constructor(name,email,empId){
        this.name = name;
        this.email = email;
        this.empId = empId;
    }
    getName() {
        return this.name;
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.empId;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;