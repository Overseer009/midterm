const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getProductsForUser()
      .then((products) => res.json(products))
      .catch((error) => res.json(error));
  });
  return router;
};
