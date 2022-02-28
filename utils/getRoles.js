const db = require("../DB/dbConnection");

// ALL ROLES
const getAllRoles = () => {
  const sql = `SELECT * FROM roles`;

  db.query(sql, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "You got all the roles",
      data: row,
    });
  });
};

module.exports = getAllRoles;
