import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { transactionsContext } from "../../hooks/TransactionsProvider";
import formatDate from "./helpers/formatdate";
import './AccordionItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function AccordionItem(props) {
  const { transactions } = useContext(transactionsContext);

  //loop to find transaction associated with props.categoryId
  const categoryTransactions = transactions.filter(obj => obj.category_id === props.categoryId);

  //loop through the income transactions and return an item for each one
  const transactionItems = categoryTransactions.map((obj) => {
    const amount = obj.transaction_amount;
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

  let expense = true;
  if (props.title === 'Monthly Income') {
    expense = false;
  }

  return (
    <li className={`item ${props.active ? "active" : ""}`}>
      {!expense && (
        <button className="button" id="income-button" onClick={() => props.onToggle()}>
          <h3>{props.title}</h3>
          <div id="income">
            <h3>{props.total}</h3>
            <span className="control">{props.active ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
          </div>
        </button>
      )}
      {expense && (
        <>
        <button className="button" onClick={() => props.onToggle()}>
          <h3>{props.title}</h3>
          <span className="control">{props.active ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
        </button>
        </>
      )}
      <div className={`transaction-wrapper ${props.active ? "open" : ""}`}>
        <div className="transactions">
          <p id="transactions-title">Transactions</p>
          {transactionItems}
        </div>
      </div>
    </li>
  )

}
