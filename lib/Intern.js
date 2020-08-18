const Employee = require("./Employee");

class Intern {
    
    constructor(school) {
      this.school = school;
    }
  
    getRole() {
      return "Intern";
    }
  
    getSchool() {
      return this.school;
    }
  }
  
  module.exports = Intern;