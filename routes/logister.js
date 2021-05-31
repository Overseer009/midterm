const express = require("express");
const router = express.Router();
const request = require("request")
// const cookieSession = require("")
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = (dbHelpers) => {

  router.get("/logister", (req, res) => {
    res.render("logister");
  })

  router.post("/logister", (req, res) => {
    const logUsername = req.body.username
    const logPassword = req.body.password
    console.log("username:", logUsername);
    dbHelpers.findUserByUsername(logUsername)
      .then((user) => {
        if(user === logUsername) {
          dbHelpers.authUser(logPassword)
          .then((password) => {
            if (password === logPassword){
              res.redirect("/")
            } else {
              console.log("wrong password")
            }
          })
          .catch((error)=> res.json(error))
        } else {
          console.log("no user by that name")
        }

      })
      .catch((error) => res.json(error));

  })
  return router;
}

// router.get("/", (req, res) => {
//   const currentUser = //database user[req.params of database]

//   if(!currentUser) {
//     res.render("logister")
//   } else {
//     res.render("index")
//   }
// })


