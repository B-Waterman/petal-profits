import { useState, useContext } from "react";
import { categoryGoalsContext } from "./providers/CategoryGoalsProvider";
import axios from 'axios'

export default function EditForm(props) {

  const { categoryGoals, setCategoryGoals } = useContext(categoryGoalsContext)
  const [amount, setAmount] = useState(props.amount)

  function saveGoal(categoryId) {
    //recreate categoryGoals with new amnt
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
    <div className="edit-form">

      <form autoComplete="off" onSubmit={e => e.preventDefault()}>
        <input
          name="Spending Goal"
          type="text"
          placeholder={amount}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </form>
      <button onClick={() => saveGoal(props.category)}>Save</button>
      <button onClick={() => props.onClose()}>Cancel</button>
    </div>
  )
}