const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getBooksForUser(req.session.user_id)
      .then((books) => res.json(books))
      .catch((error) => res.json(error));
  });


  return router;
};


