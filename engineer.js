const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name,empId,email,gitHub) {
        super(name,empId,email);
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
