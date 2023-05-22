const db = require('../connection')
const query = require('express')

//get dates for queries: 
const endDate = new Date().toJSON().slice(0, 10);
let startDate;
if (endDate.slice(8) === 01) {
  startDate = endDate;
} else {
  startDate = `${endDate.slice(0,7)}-01`
}

const getMonthlyTransactions = (userId) => {
  const queryString = 
  `SELECT transactions.id, transaction_date, transaction_amount, transactions.name as transaction_name, category_id, categories.name as category, accounts.type
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

const getMonthlyCategoriesSum = (userId) => {
  const queryString = 
  `SELECT SUM(transaction_amount), categories.name, categories.id
  FROM transactions 
  JOIN accounts ON account_id = accounts.id 
  JOIN categories on category_id = categories.id 
  WHERE user_id = $1 AND transaction_date BETWEEN $2 AND $3
  GROUP BY categories.name, categories.id;`

  return db
    .query(queryString, [userId, startDate, endDate])
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

const updateCategoryGoals = (categoryGoalId, amount) => {
  const queryString = 
    `UPDATE category_goals
    SET amount = $1
    WHERE id = $2;`

  return db
    .query(queryString, [amount, categoryGoalId])
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err.message)
    });
}


module.exports = { getMonthlyTransactions, getMonthlyCategoriesSum, getUsersCategoryGoals, updateCategoryGoals}