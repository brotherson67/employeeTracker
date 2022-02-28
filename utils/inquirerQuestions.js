const inquirer = require("inquirer");

const addDept = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
        validate: function (name) {
          if (!name) {
            console.log("You must enter a name!");
            return false;
          }
          return true;
        },
      },
    ])
    .then((ans) => {
      const department = new Department(ans.name);
      newDept(department);
      console.log("Department Added!");
      departments = getDept();
      deptArr = deptArrFill();
      return init();
    })
    .catch((err) => console.log("Something went wrong, couldnt add dept"));
};

module.exports = { addDept };
