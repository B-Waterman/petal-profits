const db = require('../connection')
const query = require('express')

//NOTE: both these functions are hard coded for the month of May

const getMonthlyTransactions = (userId) => {
  const queryString =
  `SELECT transactions.id, transaction_date, transaction_amount, transactions.name as transaction_name, category_id, categories.name as category, accounts.type
  FROM transactions
  JOIN categories on category_id = categories.id
  JOIN accounts ON account_id = accounts.id
  WHERE user_id = $1 AND transaction_date BETWEEN '2023-05-01' AND '2023-05-31';`

  return db
    .query(queryString, [userId])
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message)
    });
}

const getMonthlyCategoriesSum = (userId) => {
  const queryString =
  `SELECT SUM(transaction_amount), categories.name, categories.id
  FROM transactions
  JOIN accounts ON account_id = accounts.id
  JOIN categories on category_id = categories.id
  WHERE user_id = $1 AND transaction_date BETWEEN '2023-05-01' AND '2023-05-31'
  GROUP BY categories.name, categories.id;`

  return db
    .query(queryString, [userId])
    .then((data) => {
      return data.rows
    })
    .catch((err) => {
      console.log(err.message)
    });
}


const getUsersCategoryGoals = (userId) => {
  const queryString =
  `SELECT *
  FROM category_goals
  JOIN categories on category_id = categories.id
  WHERE user_id = $1;`

  return db
    .query(queryString, [userId])
    .then((data) => {
      return data.rows
    })
    .catch((err) => {
      console.log(err.message)
    });
}

const getCurrentAccountBalance = (userId) => {
  const queryString = `SELECT *
  FROM accounts
  WHERE user_id = $1;`

  return db
    .query(queryString, [userId])
    .then((data) => {
      console.log(data);
      return data.rows
    })
    .catch((err) => {
      console.log(err.message, "line 71")
    });
};

module.exports = { getMonthlyTransactions, getMonthlyCategoriesSum, getUsersCategoryGoals, getCurrentAccountBalance }
