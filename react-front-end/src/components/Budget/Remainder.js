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
  const remainder = (income + expense).toFixed(2) * -1
  
  return (
   <div className="remainder">
    <div className="header">
      <h3>Remaining</h3>
      <h3>{remainder}</h3>
    </div>
   </div>
  )
}