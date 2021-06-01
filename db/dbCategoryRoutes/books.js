const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getBooksForUser()
      .then((books) => res.json(books))
      .catch((error) => res.json(error));
  });

  // router.post("/", (req, res) => {
  //   const userInput = req.query.input;
  //   const id = req.session.user_id
  //   dbHelpers
  //   .addBooks(userInput, id)
  // })
  return router;
};


