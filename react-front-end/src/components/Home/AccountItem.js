import './AccountItem.scss';

export default function AccountItem(props) {
  return (
    <div className="account">
      <span className='name'>
        {props.type}
      </span>
      <span className='balance'>
        {props.balance}
      </span>
    </div>
  )
};
