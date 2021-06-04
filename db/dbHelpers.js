const bcrypt = require("bcrypt");
const cookieSession = require("cookie-session");
module.exports = (db) => {
  //--------------------------------------------------------------
  const getUsers = (id) => {

    const stringQuery = `
    SELECT username FROM users
    WHERE id = $1
    `;

    return db
      .query(stringQuery, [id])
      .then((data) => data.rows[0])
  };

  //--------------------------------------------------------------
  const getBooksForUser = (id) => {

    const stringQuery = `
    SELECT * FROM books
    WHERE user_id = $1;
      `;

    return db
      .query(stringQuery, [id])
      .then((data) => data.rows)
  };
  //------------------------------------------------------------
  const getMoviesForUser = (id) => {

    const stringQuery = `
      SELECT * FROM movies
      WHERE user_id = $1;
      `

    return db
      .query(stringQuery, [id])
      .then((data) => data.rows)
  };
  //------------------------------------------------------------
  const getRestaurantsForUser = (id) => {

    const stringQuery = `
    SELECT * FROM restaurants
    WHERE user_id = $1;`;

    return db
      .query(stringQuery, [id])
      .then((data) => data.rows)
  };
  //------------------------------------------------------------

  const getProductsForUser = (id) => {

    const stringQuery = `
    SELECT * FROM products
    WHERE user_id = $1;
  `
    return db
      .query(stringQuery, [id])
      .then((data) => data.rows)
  };
  //------------------------------------------------------------

  const getMiscForUser = (id) => {
    const stringQuery = `
      SELECT * FROM miscs
      WHERE user_id = $1;
    `
    return db
      .query(stringQuery, [id])
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

  const insertSearch = (tableName, itemName, cookie) => {

    const stringQuery = `
    INSERT INTO ${tableName} (name, user_id)
    VALUES ($1, $2);
    `
    return db
      .query(stringQuery, [itemName, cookie])
      .then((data) => {
        console.log("SUCCESS")
      })
  }

  const deleteOption = (tableName, id) => {
    console.log("deleteOption-tableName: ",tableName )
    console.log("deleteOption-id: ",id )
    const stringQuery = `
    DELETE FROM ${tableName}
    WHERE id = $1
   `
    return db
      .query(stringQuery, [id])
      .then((data) => {
        console.log("DELETED")
      })
  }
  const fetchItemById = (tableName, id) => {
    console.log("fetchItemById-tablename:", tableName)
    console.log("fetchItemById-id:", id)
    const stringQuery = `
      SELECT name
      FROM ${tableName}
      WHERE id = $1;
      `
    return db
      .query(stringQuery, [id])
      .then((data) => data.rows[0])
  }
  const editProfile = (username, email, bio, id) => {
  const stringQuery = `
    UPDATE users
    SET username = $1,
     email = $2,
     bio = $3
     WHERE id = $4;
`
return db
.query(stringQuery, [username,email,bio,id])
.then((data) => console.log("UPDATED PROFILE!!!!"))

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
    createUser,
    insertSearch,
    deleteOption,
    fetchItemById,
    editProfile
  };
};
