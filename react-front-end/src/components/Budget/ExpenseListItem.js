import { FaChevronCircleDown } from "react-icons/fa";

export default function ExpenseListItem(props) {


  return (
    <div className="category-item">
      <h3>{props.name}</h3>
      <h4>{props.amount}</h4>
      <FaChevronCircleDown className="dropdown"/>
    </div>
  )
}
  