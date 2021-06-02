const express = require("express");
const router = express.Router();
const request = require("request")
const dbHelpers = require("../db/dbHelpers");

module.exports = (dbHelpers) => {

  router.post("/delete", (req, res) => {
    const inputValue = (req.query.input).split(".");
    console.log("INPUT",inputValue);
    // console.log("Value 0:", inputValue[0]);
    // console.log("Value 1:", inputValue[1]);
    dbHelpers.deleteOption(inputValue[0], inputValue[1]);

    res.json("HEYHEY");
  })
  return router;
}
