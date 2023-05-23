import './TransactionItem.scss';

export default function TransactionItem(props) {

  const convertedAmnt  = (props.amount * -1).toLocaleString();
  // const mnt  = (props.amount * -1).toLocaleString();


  return (
    <div className="transaction">
      <div>
        <p className='title'>{props.name}</p>
        {/* <p>{props.type}</p> */}
        <p className='date'>{props.date}</p>
      </div>
      {props.amount < 0 && (
        <p className='amount'>{`$ ${convertedAmnt}`}</p>
      )}
      {props.amount >= 0 && (
        <p className='amount'>{`$ ${props.amount.toLocaleString()}`}</p>
      )}
    </div>
  )
}