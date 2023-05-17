import { FaChevronCircleDown } from "react-icons/fa";

export default function CategoryListItem(props) {


  return (
    <div className="category-item">
      <h2>{props.name}</h2>
      <h4>{props.amount}</h4>
      <FaChevronCircleDown className="dropdown"/>
    </div>
  )
}
  