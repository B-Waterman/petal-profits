import { useState, useContext } from "react";
import { categoryGoalsContext } from "./providers/CategoryGoalsProvider";
import axios from 'axios'
import './EditForm.scss'

export default function EditForm(props) {

  const { categoryGoals, setCategoryGoals } = useContext(categoryGoalsContext)
  const [amount, setAmount] = useState(props.amount)

  function saveGoal(categoryId) {
    // recreate categoryGoals with new amnt
    let categoryGoalId = 0;
    const updatedGoals = categoryGoals.map((goal) => {
      if (goal.category_id === categoryId) {
        categoryGoalId = goal.id;
        return { ...goal, amount };
      }
      return goal;
    });
     //update categoryGoals state to reflect new value
    return axios.put(`http://localhost:8080/api/category-goals/${categoryGoalId}`, amount)
      .then(() => {
        setCategoryGoals(updatedGoals);
        props.onClose()
      })
      .catch(error => console.log(error))
    }
  
  return (
    <div className="popup-box">
    <div className="edit-form">
      <form autoComplete="off" onSubmit={e => e.preventDefault()}>
        <header>What is your monthly spending limit for {props.name}?</header>
        <input
          name="edit-goal"
          type="text"
          placeholder={amount}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </form>
      {/*Mathews save button - come back to this*/}
      {/* <div className="wrapper">
        <input type="checkbox" name="submit" className="check" id="submit" />
        <label htmlFor="submit" className="button" onClick={() => saveGoal(props.category)}>
          <span id="save" className="submit-text">Save</span>
          <span className="submit-confirm">
          <i className="fa fa-check"></i>
          </span>
        </label>
      </div> */}

      <div className="buttons">
      <button id="save" onClick={() => saveGoal(props.category)}>Save</button>
      <button id="cancel" onClick={() => props.onClose()}>Cancel</button>
      </div>
    </div>
    </div>
  )
}