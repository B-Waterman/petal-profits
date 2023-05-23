export default function AccountItem(props) {
  return (
    <div className="account">
      <p>{props.name}</p>
      <p>{props.amount}</p>
      <p>{props.type}</p>
    </div>
  )
};
