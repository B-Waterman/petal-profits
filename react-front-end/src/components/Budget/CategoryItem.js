import { FaChevronCircleDown } from "react-icons/fa";


export default function CategoryItem(props) {


  return (
  
    <div className="category-item">
      <h5>{props.name}</h5>
      <h5>{props.amount}</h5>
      <FaChevronCircleDown className="dropdown"/>
    
    </div>

  )
}
  