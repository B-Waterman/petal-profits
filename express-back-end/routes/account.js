const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json()); //req.body

//add new account ID
app.post('/accounts', async (req, res) => {
  try {
    const { accounts } = req.body
    new accounts = await pool.query(
      "INSERT INTO accounts (name) VALUES ($1) RETURNING *",
    [accounts]
    );

    res.json(accounts.rows[0])
  } catch (err) {
    console.error(err.message);
  }
})

//edit user data
//**UNSURE ABOUT :ID ASK TARA&MATHEW */
app.put('/accounts/:id', async (req, res) =>{
  try{
    const { id } = req.params
    const { first_name, last_name, email } = req.body
    const editUser = await pool.query("UPDATE users SET first_name = $1, last_name = $2, email = $3, WHERE id = $4",
    [first_name, last_name, email, id]);

    res.json("Your details have been updated!")

  } catch (err) {
    console.error(err.message)
  }
});
