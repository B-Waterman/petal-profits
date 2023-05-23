import React, {useContext, useState} from 'react';
import ProgressBarBudget from './ProgressBarBudget';
import './ExpenseList.scss'
import EditForm from './EditForm';
import { formatTitle } from './helpers/formatTitle';
import Accordion from './Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { transactionsContext } from '../../TransactionsProvider';

export default function ExpenseList(props) {

  const { categories, categoryGoals } = useContext(transactionsContext);
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
    
    console.log(categoryGoals)
    //check user category goal
    const categoryGoal = categoryGoals.find(goal => goal.category_id === obj.id);
    const goalAmount = Number(categoryGoal.amount);

    let comparison = sum / goalAmount;
    let tracking = ''
    if (comparison <= 1) {
      comparison = Math.round(comparison * 100)
      const difference = (goalAmount - sum).toFixed(2).toLocaleString();
      tracking = `$${difference} Left`
    } else {
      comparison = 100;
      const difference = ((goalAmount - sum) * -1).toFixed(2).toLocaleString()
      tracking = `$${difference} Over`
    }

    const edit = isEditOpen[obj.id] || false;


    return (
    <div className="category-item" key={obj.id}>
      <Accordion
      total={amount} title={categoryTitle} id={obj.id}
       />
      {!edit && goalAmount > 0 &&(
        <>
          <div className='budget-summary'>
            <span id="amount">{amount}</span>
            <span id="goal-amount"> of ${goalAmount.toLocaleString()}</span>
          </div>
          <div className='track'>
            <ProgressBarBudget completed={comparison}/>
            <button onClick={() => toggleForm(obj.id)}>
              <FontAwesomeIcon icon={faPenToSquare} style={{color: "#8fd0a5"}} />
            </button>
          </div>

          <div className='budget-amount'>
          <h5 className='budget-amount' id='item'>{tracking}</h5>
          </div>
        </>
      )}
      {!edit && !goalAmount && (
        <div className='budget-summary no-goal'>
          <span id="amount">{amount}</span>
          <button className='select' onClick={() => toggleForm(obj.id)}>
          Set a Spending Limit
          </button>
        </div>
      )}
      {edit && (
        <EditForm
          name={categoryTitle}
          amount={goalAmount}
          category={obj.id}
          onClose={() => toggleForm(obj.id)}
        />
      )}
    </div>
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
