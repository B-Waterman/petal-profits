const db = require('../connection')
const query = require('express')

const getMonthlyTransactions = (userId, startDate, endDate) => {
  const queryString = 
  `SELECT transactions.id, account_id, transaction_date, transaction_amount, transactions.name, category_id, accounts.id, categories.name, accounts.id, accounts.type, user_id
  FROM transactions 
  JOIN categories on category_id = categories.id 
  JOIN accounts ON account_id = accounts.id 
  WHERE user_id = $1 AND transaction_date BETWEEN $2 AND $3;`

  return db
    .query(queryString, [userId, startDate, endDate])
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message)
    });
}

const getMonthlyCategoriesSum = (userId, startDate, endDate) => {
  const queryString = 
  `SELECT SUM(transaction_amount), categories.name
  FROM transactions 
  JOIN accounts ON account_id = accounts.id 
  JOIN categories on category_id = categories.id 
  WHERE user_id = $1 AND transaction_date BETWEEN $2 AND $3
  GROUP BY categories.name;`

  return db
    .query(queryString, [userId, startDate, endDate])
    .then((data) => {
      return data.rows
    })
    .catch((err) => {
      console.log(err.message)
    });
}

module.exports = { getMonthlyTransactions, getMonthlyCategoriesSum}