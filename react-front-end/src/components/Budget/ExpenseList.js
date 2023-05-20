import React, {useContext, useState} from 'react';
import CategoryTransactionList from './CategoryTransactionList'
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from "../progress-bar";
import { categoriesContext } from './providers/CategoriesProvider';
import './ExpenseList.scss'
import { categoryGoalsContext } from './providers/CategoryGoalsProvider';
import EditForm from './EditForm';
import formatTitle from './helpers/formatTitle';

export default function ExpenseList(props) {

  const { categories } = useContext(categoriesContext);
  const { categoryGoals } = useContext(categoryGoalsContext)
  const [isEditOpen, setIsEditOpen] = useState({});

  function toggleForm(categoryId) {
    setIsEditOpen(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  }

  //remove income category
  const expenseCats = categories.filter(obj => obj.name !== 'INCOME')


  //loop through the expenses categories and return an item for each one 
  //calculate the sum of all expenses as you loop to be displayed above
  let total = 0;
  const expenseItems = expenseCats.map((obj, index) => {
    let sum = Number(obj.sum);
    const amount = '$' + sum.toLocaleString();
    const categoryTitle = formatTitle(obj.name)
    total += sum;

    //check user category goal
    const categoryGoal = categoryGoals.find(goal => goal.category_id === obj.id);
    const goalAmount = Number(categoryGoal.amount);
    
    const edit = isEditOpen[obj.id] || false;

    return (
      <Accordion flush key={obj.id}>
        <Accordion.Item className="category-item" eventKey={obj.id}>

          <Accordion.Header>
           <h4>{categoryTitle}</h4>
           <h4>{amount}</h4>
          </Accordion.Header>
          <Accordion.Body>
            <CategoryTransactionList category={obj.name}/>
          </Accordion.Body>
  
          {!edit && goalAmount > 0 &&(
            <>
            <h5>{'Goal: $' + goalAmount}</h5>
            <button onClick={() => toggleForm(obj.id)}>
              Edit
            </button>
            <ProgressBar bgcolor="green" completed={Math.round(sum / goalAmount * 100)}/>
            </>
          )}
          {!edit && !goalAmount && (
            <button onClick={() => toggleForm(obj.id)}>
            Set a Spending Goal
            </button>
          )}

          {edit && (
            <EditForm
              name={obj.name}
              amount={goalAmount}
              category={obj.id}
              onClose={() => toggleForm(obj.id)}
            />
          )}

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