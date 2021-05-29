const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getMisc()
      .then((misc) => res.json(misc))
      .catch((error) => res.json(error));
  });
  return router;
};
