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

  router.post("/update", (req, res) => {
    const cookie = req.session.user_id;
    const newInput = (req.query.input).split(",")
    const newTableName = newInput[0].split("cat.").join("")
    const currentInfo = newInput[1].split("update.").join("").split(".")
    currentInfo[1] = parseInt(currentInfo[1], 10)
    dbHelpers.fetchItemById(currentInfo[0], currentInfo[1]).then(
      (data) => {
        console.log("Inside Post Update: ", data)
        const itemName = data.name
        console.log("name:", itemName);
        dbHelpers.insertSearch(newTableName, itemName, cookie)
          .then(() => {
            dbHelpers.deleteOption(currentInfo[0], currentInfo[1])
              .then(() => res.json("UPDATE ROUTE WORKING!!!!!"))

          })
      })

  })

  return router;
}
