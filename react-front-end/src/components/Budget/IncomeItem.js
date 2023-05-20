import Accordion from 'react-bootstrap/Accordion';
import React, {useContext} from 'react';
import IncomeTransactionList from './IncomeTransactionList';
import { categoriesContext } from './providers/CategoriesProvider';

export default function IncomeItem(props) {

  const { categories } = useContext(categoriesContext)

  //pull out income category
  const income = categories.filter(obj => obj.name === 'INCOME')

  let amount = ''
  //figure out why you needs to loop
  const incomeCategory = income.map((obj) => {
    let sum = Number(obj.sum) * -1
    amount = '$' + sum.toLocaleString()
    return (
      <Accordion.Item className="income-item" eventKey={obj.id} key={obj.id}>
        <Accordion.Header>
        </Accordion.Header>
        <Accordion.Body>
          <IncomeTransactionList/>
        </Accordion.Body>
      </Accordion.Item>

    )
  });


  return (
    <div className="income">
    <header>
      <h3>Monthly Income</h3>
      <h3>{amount}</h3>
    </header>
    <Accordion flush>
    {incomeCategory}
    </Accordion>
    </div>
  )
}