const bcrypt = require("bcrypt");
const cookieSession = require("cookie-session");
module.exports = (db) => {
  //--------------------------------------------------------------
  const getUsers = () => {
    return db
      .query(`SELECT * FROM users;`)
      .then((data) => data.rows)
  };

  //--------------------------------------------------------------
  const getBooksForUser = () => {

    // const id = [req.session.user_id];
    const stringQuery = `
      SELECT * FROM books
      `;



    return db
      .query(stringQuery)
      .then((data) => data.rows)
  };
  //------------------------------------------------------------
  const getMoviesForUser = () => {
    // const stringQuery = `
    //   SELECT * FROM movies
    //   JOIN users ON users.id = user_id
    //   WHERE users.id = $1;`;
    // const id = [req.params.id];

    const stringQuery = `
    SELECT * FROM movies;
  `

    return db
      .query(stringQuery)
      .then((data) => data.rows)
  };
  //------------------------------------------------------------
  const getRestaurantsForUser = () => {
    // const stringQuery = `
    //     SELECT * FROM restaurants
    //     JOIN users ON users.id = user_id
    //      WHERE users.id = $1;`;
    //     const id = [req.params.id];

    const stringQuery = `SELECT * FROM restaurants`

    return db
      .query(stringQuery)
      .then((data) => data.rows)
};
//------------------------------------------------------------

const getProductsForUser = () => {
  // const stringQuery = `
  //   SELECT * FROM products
  //   JOIN users ON users.id = user_id
  //   WHERE users.id = $1;`;
  // const id = [req.params.id];

  const stringQuery = `
    SELECT * FROM products;
  `
  return db
    .query(stringQuery)
    .then((data) => data.rows)
};
//------------------------------------------------------------

const getMiscForUser = () => {
  // const stringQuery = `
  //   SELECT * FROM misc
  //   JOIN users ON users.id = user_id
  //   WHERE users.id = $1;`;
  // const id = [req.params.id];

  const stringQuery = `
    SELECT * FROM misc;
  `

  return db
    .query(stringQuery)
    .then((data) => data.rows)
};

const findUserByUsername = function(user) {
  const stringQuery = `
    SELECT id, username, password
    FROM users
    WHERE username = $1;
    `;
  return db
    .query(stringQuery, [user])
    .then((data) => data.rows[0]);
};

const authUser = function(password) {

  const stringQuery = `
    SELECT password
    FROM users
    WHERE password = $1;
    `
  return db
    .query(stringQuery, [password])
    .then((data) => data.rows[0].password)
}


const createUser = function(user, password) {

  const stringQuery = `
    INSERT INTO users (username, password)
    VALUES ($1, $2);

    `
  return db
    .query(stringQuery, [user, password])
    .then((data) => findUserByUsername(user))
}
//------------------------------------------------------------



//------------------------------------------------------------

return {
  getUsers,
  getBooksForUser,
  getMoviesForUser,
  getRestaurantsForUser,
  getProductsForUser,
  getMiscForUser,
  findUserByUsername,
  authUser,
  createUser,
};
};
