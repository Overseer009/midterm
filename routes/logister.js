const express = require("express");
const router = express.Router();
const request = require("request");




router.get("/", (req, res) => {
  const currentUser = //database user[req.params of database]

  if(!currentUser) {
    res.render("logister")
  } else {
    res.render("index")
  }
})
