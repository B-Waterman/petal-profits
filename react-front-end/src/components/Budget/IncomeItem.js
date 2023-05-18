import Accordion from 'react-bootstrap/Accordion';
import React, {useContext} from 'react';
import IncomeTransactionList from './IncomeTransactionList';
import { categoriesContext } from './CategoriesProvider';

export default function IncomeItem(props) {

  const { categories } = useContext(categoriesContext)

  //pull out income category
  const income = categories.filter(obj => obj.name === 'INCOME')

  let amount = ''
  //figure out why you needs to loop
  const incomeCategory = income.map((obj, index) => {
    let sum = Number(obj.sum) 
    amount = '$' + sum.toLocaleString()
    return (
      <Accordion flush>
      <Accordion.Item className="income-item" eventKey={index}>
        <Accordion.Header>
        </Accordion.Header>
        <Accordion.Body>
          <IncomeTransactionList/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    )
  });


  return (
    <div className="income">
    <header>
      <h3>Monthly Income</h3>
      <h3>{amount}</h3>
    </header>
    {incomeCategory}
    </div>
  )
}