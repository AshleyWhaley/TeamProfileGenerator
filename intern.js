const Employee = require("./employee");

class Intern extends Employee {
    constructor(name,empId,email,school) {
        super(name,empId,email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
