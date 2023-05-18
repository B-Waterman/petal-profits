import { FaChevronCircleDown } from "react-icons/fa";
import ProgressBar from "../progress-bar";
import DropDown from "./DropDown";


export default function CategoryItem(props) {

  const percentage = (20 / 40) * 100;

  return (
  
    <div className="category-item">
      <header>
        <h5>{props.name}</h5>
        <h5>{props.amount}</h5>
        <h5>Goal: $500</h5>
        <DropDown/>
      </header>
        <ProgressBar bgcolor="green" completed={percentage}/>
    </div>

  )
}
  