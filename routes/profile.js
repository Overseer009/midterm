const express = require("express");
const router = express.Router();
const request = require("request")
const dbHelpers = require("../db/dbHelpers");

module.exports = (dbHelpers) => {
  router.post("/", (req, res) => {
    const user_id = req.session.user_id
    dbHelpers.editProfile(req.body.username, req.body.email, req.body.bio, user_id)
  })

return router;
}


// Example of doing it in REGISTER
// const logUsername = req.body.username;
// const logPassword = bcrypt.hashSync(req.body.password, 10);
// dbHelpers.findUserByUsername(logUsername)
//   .then((user) => {
//     if (!user) {
//       dbHelpers.createUser(logUsername, logPassword)
//         .then((user) => {
//           req.session.user_id = user.id
//           res.redirect("/");
//         })
//        .catch((error) => res.json(error));
//     } else {
//       res.json("User already exists")
//     }
//   })
