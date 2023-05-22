import { useContext } from "react";
import { transactionsContext } from "../../TransactionsProvider";


export default function Remainder(props) {

  const { transactions } = useContext(transactionsContext);

  let income = 0
  let expense = 0
  for (let transaction of transactions) {
    let num = parseFloat(transaction.transaction_amount)

    if (transaction.category === 'INCOME') {
      income += num;
    } else {
      expense += num;
    }

  }
  //note: multiply by -1 because in this case income is a negative number and expense is positive
  const remainder = ((income * -1) - expense).toFixed(2) 
  // const remainder = -200.00;
  
  if (remainder > 0) {
    return (
        <div className="remainder" id="surplus">
         <div className="header">
           <h1>${remainder}</h1> 
           <h3>remaining</h3>
         </div>
           <p>Keep up the great work! These funds can be used to water your plant goals at the end of the month.</p>
        </div>
    )
  } else {
    const remainderConverted = remainder * -1;
    return (
    <div className="remainder" id="deficit">
       <div className="header">
         <h1>${remainderConverted}</h1> 
         <h3>over</h3>
       </div>
         <p>Oh no! You're spending more than your monthly income. Be careful or you won't have any funds to water your plants at the end of the month.</p>
      </div>
    )
  }
}