const db = require("../db/connection");

// Get departments
const getDept = () => {
  const departments = [];
  db.query(`SELECT * FROM department`, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    for (let i = 0; i < rows.length; i++) {
      departments.push(rows[i]);
    }
  });
  return departments;
};

// Get roles
const getRoles = () => {
  const roles = [];
  db.query(
    `SELECT roles.id, title, salary, department.name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      for (let i = 0; i < rows.length; i++) {
        roles.push(rows[i]);
      }
    }
  );
  return roles;
};

module.exports = { getDept, getRoles };
