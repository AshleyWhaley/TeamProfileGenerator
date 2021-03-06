const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, ID, email, gitHub) {
        super(name,ID,email);
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
