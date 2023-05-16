const Express = require('express');
const router = Express.Router();

router.get("/transactions", (req, res) => {
  res.render('/transactions')
});

module.exports = router;