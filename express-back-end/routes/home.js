const express = require('express')
const router = express.Router();
const db = require('../db/connection')

// router.get("/accounts", (req, res) => {
//   getCurrentAccountBalance(1)
//     .then(data => res.json(data))
//     .catch(error => console.log(error))
// });

// router.get('/', async (req, res) => {
//   try {
//     const allgoals = await db.query("SELECT * FROM plant_goals")
//     res.json(allgoals.rows);
//   } catch (err) {
//     console.error(err.message);

//   }
// })


module.exports = router;
