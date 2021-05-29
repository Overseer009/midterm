module.exports = (db) => {
  //--------------------------------------------------------------
  const getUsers = () => {
    return db
      .query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };
  //--------------------------------------------------------------
  const getBooksForUser = () => {
    const stringQuery = `
      SELECT * FROM books
      JOIN users ON users.id = user_id
      WHERE users.id = $1;`;
    const id = [req.params.id];

    return db
      .query(stringQuery, id)
      .then((data) => {
        const books = data.rows;
        res.json({ books });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };
  //------------------------------------------------------------
  const getMoviesForUser = () => {
    const stringQuery = `
      SELECT * FROM movies
      JOIN users ON users.id = user_id
      WHERE users.id = $1;`;
    const id = [req.params.id];

    return db
      .query(stringQuery, id)
      .then((data) => {
        const movies = data.rows;
        res.json({ movies });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };
  //------------------------------------------------------------
  const getRestaurantsForUser = () => {
    const stringQuery = `
      SELECT * FROM restaurants
      JOIN users ON users.id = user_id
      WHERE users.id = $1;`;
    const id = [req.params.id];

    return db
      .query(stringQuery, id)
      .then((data) => {
        const restaurants = data.rows;
        res.json({ restaurants });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };
  //------------------------------------------------------------

  const getProductsForUser = () => {
    const stringQuery = `
      SELECT * FROM products
      JOIN users ON users.id = user_id
      WHERE users.id = $1;`;
    const id = [req.params.id];

    return db
      .query(stringQuery, id)
      .then((data) => {
        const products = data.rows;
        res.json({ products });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };
  //------------------------------------------------------------

  const getMiscForUser = () => {
    const stringQuery = `
      SELECT * FROM misc
      JOIN users ON users.id = user_id
      WHERE users.id = $1;`;
    const id = [req.params.id];

    return db
      .query(stringQuery, id)
      .then((data) => {
        const misc = data.rows;
        res.json({ misc });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
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
