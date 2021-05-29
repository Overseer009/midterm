
module.exports = (db) => {
  const getUsers = () => {
    return db.query(`SELECT * FROM users;`)
      .then((data) => {
        const users = data.rows;
        res.json({ users });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message })
      });
  };

  



  return {getUsers, }
};


