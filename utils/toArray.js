const db = require("../db/connection");

// Populate array with departments
const deptArrFill = () => {
  const deptArr = [];
  db.query(`SELECT * FROM department`, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    for (let i = 0; i < rows.length; i++) {
      deptArr.push({ name: rows[i].name, value: rows[i].id });
    }
  });
  return deptArr;
};

module.exports = { deptArrFill };
