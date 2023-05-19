const db = require('../connection')
const query = require('express')

const getCurrentAccountBalance = (userId) => {
  const queryString =
  `SELECT SUM(current_balance), accounts.type, accounts.id
    FROM accounts
    GROUP BY accounts.type, accounts.id`

  return db
    .query(queryString, [userId])
    .then((data) => {
      return data.rows
    })
    .catch((err) => {
      console.log(err.message)
    });
};

module.exports = { getCurrentAccountBalance }
