const Express = require('express');
const router = Express.Router();

router.get("/garden", (req, res) => {
  res.render('/garden')
});

module.exports = router;