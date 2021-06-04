const express = require("express");
const router = express.Router();
const request = require("request")
const dbHelpers = require("../db/dbHelpers");

module.exports = (dbHelpers) => {

  router.post("/", (req, res) => {
    const cookie = req.session.user_id
    const inputValue = (req.query.input).split(",")
    console.log("Route cookie:", cookie);
    console.log("route value:", inputValue);

    dbHelpers.insertSearch(inputValue[0], inputValue[1], cookie).then(() => res.json("success"))


  })
  return router;
}
