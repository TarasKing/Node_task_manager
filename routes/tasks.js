const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Task manager app - get request!");
});

module.exports = router;
