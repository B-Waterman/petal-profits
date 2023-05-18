const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json()); //req.body

//create a goal
app.post('/garden', async (req, res) => {
  try {
    const { plant_goals } = req.body
    new plant_goals = await pool.query(
      "INSERT INTO plant_goals (name) VALUES ($1) RETURNING *", 
    [plant_goals]
    );

    res.json(plant_goals.rows[0])
  } catch (err) {
    console.error(err.message);
  }
})

//get all goals
app.get('/garden', async (req, res) => {
  try {
    const allgoals = await pool.query("SELECT * FROM plant_goals")
    res.json(allgoals.rows);
  } catch (err) {
    console.error(err.message);

  }
})

//get a goal
app.get('/garden/:id', async (req, res) => {
  try {
    const { id } = req.params
    const goal = await pool.query(`SELECT * FROM plant_goals WHERE id = $1`, [id])

    res.json(plant_goals.rows[0])
  } catch (err) {
    console.error(err.message);

  }
})

//update/edit a goal
app.put('/garden/:id', async (req, res) =>{
  try{
    const { id } = req.params
    const { plant_goals } = req.body
    const updategoals = await pool.query("UPDATE plant_goals SET name = $1 Where id = $2", 
    [name, id]);

    res.json("plant goal was updated")

  } catch (err) {
    console.error(err.message)
  }
})


//delete a goal
app.delete('/garden', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteGoal = await pool.query("DELETE FROM plant_goals WHERE id = $1", [id])
    res.json("goal was deleted")

  } catch (err) {
    console.error(err.message);

  }
})