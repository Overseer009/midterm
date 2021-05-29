const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getRestaurants()
      .then((restaurants) => res.json(restaurants))
      .catch((error) => res.json(error));
  });
  return router;
};
