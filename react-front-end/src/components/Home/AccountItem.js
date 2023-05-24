import './AccountItem.scss';

export default function AccountItem(props) {
  return (
    <div className="account">
      <span className='name'>
        <p>{props.type}</p>
      </span>
      <span className='balance'>
        <p>{props.balance}</p>
      </span>
    </div>
  )
};
