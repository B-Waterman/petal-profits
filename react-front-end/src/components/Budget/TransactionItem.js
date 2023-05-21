import './TransactionItem.scss';

export default function TransactionItem(props) {


  return (
    <div className="transaction">
      <p>{props.name}</p>
      <p>{props.amount}</p>
      <p>{props.date}</p>
      <p>{props.type}</p>
    </div>
  )
}