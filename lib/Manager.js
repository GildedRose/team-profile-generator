const Employee = require("./Employee");

class Manager {
    
    constructor(officeNumber) {
      this.officeNumber = officeNumber;
    }
  
    getRole() {
      return "Manager";
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  }
  
  module.exports = Manager;