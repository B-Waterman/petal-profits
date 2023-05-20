import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { transactionsContext } from "../../TransactionsProvider";
import formatDate from "./helpers/formatdate";
import './Accordion.scss'

export default function AccordionItem(props) {
  const { transactions } = useContext(transactionsContext);

  //loop to find transaction associated with props.categoryId
  const categoryTransactions = transactions.filter(obj => obj.category_id === props.categoryId);

  //loop through the income transactions and return an item for each one 
  const transactionItems = categoryTransactions.map((obj) => {
    const amount = '$' + obj.transaction_amount;
    const date = formatDate(obj.transaction_date);
  
    return (
      <TransactionItem
        key={obj.id}
        name={obj.transaction_name}
        amount={amount}
        date={date}
        type={obj.type}
      />
    );
  });

  return (
    <li className={`accordion-item ${props.active ? "active" : ""}`}>
      <button className="button" onClick={() => props.onToggle()}>
        <h3>{props.title}</h3>
        <div className="total">
          <h3>{props.total}</h3>
          <span className="control">{props.active ? "—" : "+"}</span>
        </div>
      </button>
      <div className={`transaction-wrapper ${props.active ? "open" : ""}`}>
        <div className="transactions">
          {transactionItems}
        </div>
      </div>
    </li>
  );

}