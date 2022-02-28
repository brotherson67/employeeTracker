// IMPORTS
const bodyParser = require("body-parser");
const express = require("express");
const db = require("../../DB/dbConnection");

const router = express.Router();
// for the sake of security, it might be wise to input the file checking module I have in the practice module

// POST ROUTE(S)
router.post("/departments", (req, res) => {
  const sql = `INSERT INTO departments (dep_name, dep_description) VALUES (?, ?)`;
  const params = [body.dep_name, body.dep_description];

  db.query(sql, params, (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "Nice, that worked",
      data: bodyParser,
    });
  });
});

// GET METHODS

// INDIVIDUAL DEPT
router.get("/departments/:id", (req, res) => {
  const sql = ``; // make query that calls the roles taht are part of each department as well
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "This is the dept you were wanting",
      data: row,
    });
  });
});

// EXPORTS
module.exports = router;
