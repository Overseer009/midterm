const bcrypt = require("bcrypt");
module.exports = (db) => {
  //--------------------------------------------------------------
  const getUsers = () => {
    return db
      .query(`SELECT * FROM users;`)
      .then((data) => data.rows)
      .catch((error) => error.message)
  };

  //--------------------------------------------------------------
  const getBooksForUser = () => {
    // const stringQuery = `
    //   SELECT * FROM books
    //   JOIN users ON users.id = user_id
    //   WHERE users.id = $1;`;
    // const id = [req.params.id];

    const stringQuery = `
      SELECT * FROM books;
    `

    return db
      .query(stringQuery)
      .then((data) => data.rows)
      .catch((error) => error.message);
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
      .catch((error) => error.message);
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
      .catch ((error) => error.message);
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
    .catch((error) => error.message);
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
    .catch((error) => error.message);
};

const findUserByUsername = function(user) {
  const stringQuery = `
    SELECT id, username, password
    FROM users
    WHERE username = $1;
    `;
  return db
    .query(stringQuery, [user])
    .then((data) => data.rows[0])
    .catch((error) => error.message);
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
    .catch((error) => error.message)
}


const createUser = function(user, password) {

  const stringQuery = `
    INSERT INTO users (username, password)
    VALUES ($1, $2);

    `
  return db
    .query(stringQuery, [user, password])
    .then((data) => findUserByUsername(user))
    .catch((error) => error.message)
}


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
  createUser
};
};
