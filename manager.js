const Employee = require("./employee");

class Manager extends Employee {
    constructor(name,empId,email,offNum) {
        super(name,empId,email);
        this.offNum = offNum;
    }
    getOfficeNumber() {
        return this.offNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;