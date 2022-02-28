const express = require("express");
const db = require("../../DB/dbConnection");
const router = express.Router();

router.use(require("./department"));
// router.use(require("./employees"));
router.use(require("./roles"));

module.exports = router;
