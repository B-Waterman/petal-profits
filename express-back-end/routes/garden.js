const express = require('express')
const router = express.Router();
const db = require('../db/connection')

//create a goal
router.post('/', async (req, res) => {
  try {
    const { plant_goals } = req.body
    const result = await db.query(
      "INSERT INTO plant_goals (name) VALUES ($1) RETURNING *;", 
    [plant_goals]
    );
      
    res.json(result.rows[0])
  } catch (err) {
    console.error(err.message);
  }
})

//get all goals
router.get('/', async (req, res) => {
  try {
    const allgoals = await db.query("SELECT * FROM plant_goals")
    res.json(allgoals.rows);
  } catch (err) {
    console.error(err.message);

  }
})

//get a goal
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const goal = await db.query(`SELECT * FROM plant_goals WHERE id = $1`, [id])

    res.json(plant_goals.rows[0])
  } catch (err) {
    console.error(err.message);

  }
})

//update/edit a goal
router.put('/:id', async (req, res) =>{
  try{
    const { id } = req.params
    const { plant_goals } = req.body
    const updategoals = await db.query("UPDATE plant_goals SET name = $1 Where id = $2", 
    [name, id]);

    res.json("plant goal was updated")

  } catch (err) {
    console.error(err.message)
  }
})


//delete a goal
router.delete('/', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteGoal = await db.query("DELETE FROM plant_goals WHERE id = $1", [id])
    res.json("goal was deleted")

  } catch (err) {
    console.error(err.message);

  }
})

module.exports = router;