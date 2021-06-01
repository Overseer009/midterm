const express = require("express");
const router = express.Router();
const request = require("request")
const bodyParser = require("body-parser");
const dbHelpers = require("../db/dbHelpers");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (dbHelpers) => {

  router.get("/logister", (req, res) => {
    if (!req.session.user_id) {
      res.render("logister");
    }
    res.redirect("/")
  });

  router.post("/logout", (req, res) => {
    req.session.user_id = null;
    res.redirect('/logister');
  });

  router.post("/logister", (req, res) => {
    const logUsername = req.body.username
    const logPassword = req.body.password;
    dbHelpers.findUserByUsername(logUsername)
      .then((user) => {
        if (!user) {
          console.log("invalid user")
        } else {
          if (bcrypt.compareSync(logPassword, user.password)) {
            req.session.user_id = user.id;
            res.redirect("/");
          } else {
            console.log("wrong password")
          }
        }
      })
      .catch((error) => res.json(error));

  })


  router.post("/register", (req, res) => {
    const logUsername = req.body.username;
    const logPassword = bcrypt.hashSync(req.body.password, 10);
    dbHelpers.findUserByUsername(logUsername)
      .then((user) => {
        if (user !== logUsername) {
          dbHelpers.createUser(logUsername, logPassword)
            .then((user) => {
              console.log("user info: ", user)
              req.session.user_id = user.id
              res.redirect("/");
            })

        } else {
          console.log("invalid credential")
        }
      })
  })
  return router;
}
