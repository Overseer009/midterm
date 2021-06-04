const express = require("express");
const router = express.Router();
const request = require("request")
const dbHelpers = require("../db/dbHelpers");

module.exports = (dbHelpers) => {
  router.post("/", (req, res) => {
    const user_id = req.session.user_id
    dbHelpers.editProfile(req.body.username, req.body.email, req.body.bio, user_id)
      .then(() => res.redirect("/"))
  })

  return router;
}
