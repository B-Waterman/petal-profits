import { useContext } from "react";
import { transactionsContext } from "./DataProvider";

export default function Remainder(props) {

  const { state } = useContext(transactionsContext);

  const transactions = state.transactions;

  

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
  //note: m,ultiply by -1 because in this case income is a negative number and expense is positive
  const remainder = (income + expense).toFixed(2) * -1
  
  return (
   <div className="remainder">
    <h2>Remaining</h2>
    <h2>{remainder}</h2>
   </div>
  )
}