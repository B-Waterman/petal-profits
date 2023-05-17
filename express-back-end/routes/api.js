const Express = require('express');
const router = Express.Router();
const { getMonthlyTransactions, getMonthlyCategoriesSum } = require('../db/queries/transactions');

router.get("/transactions", (req, res) => {
  // grab data from db
  getMonthlyTransactions(1, '2023-05-01', '2023-05-31')
    .then(data => res.json(data))
    .catch(error => console.log(error))

});

router.get("/categories", (req, res) => {
  // get the categories total as per all transactions
  getMonthlyCategoriesSum(1, '2023-05-01', '2023-05-31')
    .then(data => res.json(data))
    .catch(error => console.log(error))
});

module.exports = router;