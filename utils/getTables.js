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

module.exports = { getDept };
