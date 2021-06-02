const express = require("express");
const router = express.Router();
const request = require("request")
const dbHelpers = require("../db/dbHelpers");

module.exports = (dbHelpers) => {

  router.post("/delete", (req, res) => {
    const inputValue = (req.query.input).split(".");
    // console.log("Value 0:", inputValue[0]);
    // console.log("Value 1:", inputValue[1]);
    dbHelpers.deleteOption(inputValue[1], inputValue[2]);

    res.json("HEYHEY");
  })

  router.post("/update", (req,res) => {
    const cookie = req.session.user_id;

    // inputValue[1] = tablename inputValue[2] = id for item
    const inputValue = (req.query.input).split(".");
    dbHelpers.fetchItemById(inputValue[1],inputValue[2]).then(
      (data)=>{
        const itemName = data.name
        dbHelpers.insertSearch(inputValue[1], itemName, cookie)
    })

    // dbHelpers.deleteOption(inputValue[1], inputValue[2]);

    res.json("UPDATE ROUTE WORKING!!!!!");
  })

  return router;
}
