import './TransactionItem.scss';

export default function TransactionItem(props) {


  return (
    <div className="transaction">
      <div>
        <p className='title'>{props.name}</p>
        {/* <p>{props.type}</p> */}
        <p className='date'>{props.date}</p>
      </div>
      <p className='amount'>{props.amount}</p>
    </div>
  )
}