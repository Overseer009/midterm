// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// const dbHelpers = require("./db/dbHelpers")(db);
// db.connect();

// module.exports = (db) => {
//   const findUserByUsername = function(user) {
//     lofg
//     const stringQuery = `
//     SELECT username
//     FROM users
//     WHERE username = $1;
//     `;
//     return db
//     .query(stringQuery, [user])
//     .then((data) => data.rows)
//     .catch((error) => error.message);
//   };

//   //Checks if user and password match the userdb
//   // const authenticateUser = (email, password, db) => {
//   //   const user = fetchUserByEmail(email, db);
//   //   if (user && bcrypt.compareSync(password, db[user].password)) {
//   //     return db[user];
//   //   } else {
//   //     return false;
//   //   }

//   return {
//     findUserByUsername
//   };
// }
