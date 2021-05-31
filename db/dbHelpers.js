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
      .catch((error) => error.message);
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
  //------------------------------------------------------------

  return {
    getUsers,
    getBooksForUser,
    getMoviesForUser,
    getRestaurantsForUser,
    getProductsForUser,
    getMiscForUser
  };
};
