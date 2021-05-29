const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getMovies()
      .then((movies) => res.json(movies))
      .catch((error) => res.json(error));
  });
  return router;
};
