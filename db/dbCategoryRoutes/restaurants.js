const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getRestaurantsForUser(req.session.user_id)
      .then((restaurants) => res.json(restaurants))
      .catch((error) => res.json(error));
  });
  return router;
};
