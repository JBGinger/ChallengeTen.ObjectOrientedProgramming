const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }

    getRole() {  // This doesn't need to be overridden but is here per instructions.
        return 'Manager';
    }
}

module.exports = Manager;