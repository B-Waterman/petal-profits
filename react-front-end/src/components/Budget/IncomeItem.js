import Accordion from 'react-bootstrap/Accordion';
import React, {useContext} from 'react';
import { transactionsContext } from './DataProvider';
import IncomeTransactionList from './IncomeTransactionList';

export default function IncomeItem(props) {

  const { state } = useContext(transactionsContext);

  //pull out income category
  const income = state.categories.filter(obj => obj.name === 'INCOME')

  //figure out why you needs to loop
  const incomeCategory = income.map((obj, index) => {
    let sum = Number(obj.sum) 
    const amount = '$' + sum.toLocaleString()
    return (
      <Accordion flush>
      <Accordion.Item className="income-item" eventKey={index}>
        <Accordion.Header>
          <h2>Monthly Income</h2>
          <h2>{amount}</h2>
        </Accordion.Header>
        <Accordion.Body>
          <IncomeTransactionList/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    )
  });


  return (
    <header className="income">
      {incomeCategory}
    </header>
  )
}