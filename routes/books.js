const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getBooksForUser()
      .then((books) => res.json(books))
      .catch((error) => res.json(error));
  });
  return router;
};
