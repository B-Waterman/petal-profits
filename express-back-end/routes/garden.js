const express = require('express')
const router = express.Router();
const db = require('../db/connection')

//create a goal
router.post('/', async (req, res) => {
  const userId = 1
  const {name, amount} = req.body
  console.log('name:', name, 'amount:', amount)
  return db.query("INSERT INTO plant_goals (name, target_amount, user_id) VALUES ($1, $2, $3) RETURNING *;", [name, amount, userId])
  .then((response) => {res.json(response.rows)})
  .catch((error) => console.error(error))
})

//get all goals
router.get('/', async (req, res) => {
  return db.query("SELECT * FROM plant_goals ORDER BY id ;")

  .then((response) => {res.json(response.rows)})

  .catch((error) => console.error(error))

})

//update/edit a goal
router.put('/:id', async (req, res) =>{
     const { name } = req.body
     const { id } = req.params
  return db.query("UPDATE plant_goals SET name = $1 WHERE id = $2;",
     [name, id])
     .then((response) => {res.json(response.rows)})
      .catch((error) => console.error(error))
})


//delete a goal
// router.delete('/', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteGoal = await db.query("DELETE FROM plant_goals WHERE id = $1", [id])
//     res.json("goal was deleted")

//   } catch (err) {
//     console.error(err.message);

//   }
// })

module.exports = router;
