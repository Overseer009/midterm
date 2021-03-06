/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  router.get("/", (req, res) => {
    dbHelpers
      .getUsers(req.session.user_id)
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        return res.json(error)
      });
  });
  return router;
};
