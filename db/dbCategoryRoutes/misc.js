const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getMiscForUser(req.session.user_id)
      .then((misc) => res.json(misc))
      .catch((error) => res.json(error));
  });
  return router;
};
