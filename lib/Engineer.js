const Employee = require("./Employee");

class Engineer {
    
    constructor(gitHub) {
      this.gitHub = gitHub;
    }
  
    getRole() {
      return "Manager";
    }
  
    getGitHub() {
      return this.gitHub;
    }
  }
  
  module.exports = Engineer;