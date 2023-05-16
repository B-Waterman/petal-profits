const Express = require('express');
const router = Express.Router();


router.get("/account", (req, res) => {
  res.render('/account')
});

module.exports = router;