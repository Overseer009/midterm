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
    console.log("HELLO");
    console.log("res:", res);
    dbHelpers
      .getUsers()
      .then((users) => {
        console.log("users:", users);
        res.json(users);
      })
      .catch((error) => {
        console.log("error:", error.message);
        return res.json(error)
      });
  });
  return router;
};
