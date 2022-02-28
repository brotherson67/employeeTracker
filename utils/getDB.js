const { get } = require("express/lib/response");
const db = require("../DB/dbConnection");

// ALL DEP
const getAllDepts = () => {
  const sql = `SELECT * FROM departments`;

  db.query(sql, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "You got all the departments",
      data: row,
    });
  });
};

module.exports = getAllDepts;
