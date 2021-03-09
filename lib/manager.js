const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, ID, email, num) {
        super(name, ID, email);
        this.num = num;
    }
    getOfficeNumber() {
        return this.num;
    }
    getRole() {
        return "Manager";
    };
}

module.exports = Manager;