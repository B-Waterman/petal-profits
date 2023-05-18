const Express = require('express');
const router = Express.Router();
const { getMonthlyTransactions, getMonthlyCategoriesSum, getUsersCategoryGoals } = require('../db/queries/transactions');

router.get("/transactions", (req, res) => {
  // get transaction data from db
  getMonthlyTransactions(1) //hardcoding user1 for now
    .then(data => res.json(data))
    .catch(error => console.log(error))

});

router.get("/categories", (req, res) => {
  // get the categories total as per all transactions
  getMonthlyCategoriesSum(1)
    .then(data => res.json(data))
    .catch(error => console.log(error))
});

router.get("/category-goals", (req, res) => {
  // get the categories saving goals
  getUsersCategoryGoals(1)
    .then(data => res.json(data))
    .catch(error => console.log(error))
});

module.exports = router;