import React, {useContext, useState} from 'react';
import CategoryTransactionList from './CategoryTransactionList'
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from "../progress-bar";
import { categoriesContext } from './providers/CategoriesProvider';
import './ExpenseList.scss'
import { categoryGoalsContext } from './providers/CategoryGoalsProvider';
import EditForm from './EditForm';

export default function ExpenseList(props) {

  const { categories } = useContext(categoriesContext);
  const { categoryGoals } = useContext(categoryGoalsContext)
  const [isOpen, setIsOpen] = useState(false);

  function save(categoryId, userId) {
    //update categoryGoals state to reflect new value
    // makes axios post request (change string into #? first) and return a promise
    //.then => success message
    //.catch => error messge
  }
  
  
  const percentage = (20 / 40) * 100;

  //remove income category
  const expenseCats = categories.filter(obj => obj.name !== 'INCOME')


  //loop through the expenses categories and return an item for each one 
  //calculate the sum of all expenses as you loop to be displayed above
  let total = 0;
  const expenseItems = expenseCats.map((obj, index) => {
    let sum = Number(obj.sum);
    const amount = '$' + sum.toLocaleString();
    total += sum;

    //check if user has set a category goal
    const categoryGoal = categoryGoals.find(goal => goal.id === obj.id);
    const goalAmount = categoryGoal ? categoryGoal.amount : '';

    return (
      <Accordion flush key={obj.id}>
      <Accordion.Item className="category-item" eventKey={obj.id}>
        <Accordion.Header>
          <h4>{obj.name}</h4>
          <h4>{amount}</h4>
        </Accordion.Header>
          {goalAmount && (
            <>
              <h5>{'Goal: $' + goalAmount}</h5>
              <button onClick={() => setIsOpen(true)}>
                Edit
              </button>
              {isOpen && (
                <EditForm
                  amount={goalAmount}
                  category={obj.id}
                  onCancel={() => setIsOpen(false)}
                  onSave={save}
                />
              )}
              <ProgressBar bgcolor="green" completed={percentage}/>
            </>
          )}
          {!goalAmount && (
            <>
              <button onClick={() => setIsOpen(true)}>
              Set a Spending Goal
              </button>
              {isOpen && (
              <EditForm
                amount="0"
                category={obj.id}
                onCancel={() => setIsOpen(false)}
                onSave={save}
              />
              )}
            </>
          )}

        <Accordion.Body>
          <CategoryTransactionList category={obj.name}/>
        </Accordion.Body>
      </Accordion.Item> 
      </Accordion>
    )
  });

  const totalExpenses = '$' + total.toLocaleString()
  

  return (
    <div className="expense-list">
      <header className="expense-header">
        <h3>Monthly Expenses</h3>
        <h3>{totalExpenses}</h3>
      </header>
      <ul>
        {expenseItems}
      </ul>
    </div>
  )
}