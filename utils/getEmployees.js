const { get } = require("express/lib/response");
const db = require("../DB/dbConnection");

// ALL EMPLOYEES
const getAllEmployees = () => {
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "You got all the employees",
      data: row,
    });
  });
};

module.exports = getAllEmployees;
