import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils,  faCar, faCircleDollarToSlot, faHouse, faPlane, faIcons, faBriefcaseMedical, faHandHoldingHeart} from "@fortawesome/free-solid-svg-icons";
import { categoriesContext } from "./providers/CategoriesProvider";
import { useContext } from "react";
import './TopSpending.scss';
import formatTitle from './helpers/formatTitle';

export default function TopSpending(props) {


  const { categories } = useContext(categoriesContext);

  //find the 3 highest values for top spending component
  // Sort the expenseCats array in descending order based on obj.sum
  //remove income category
  const expenseCats = categories.filter(obj => obj.name !== 'INCOME')
  expenseCats.sort((a, b) => Number(b.sum) - Number(a.sum));
  // Extract the three highest values
  const highestValues = expenseCats.slice(0, 3).map(obj => ({
    sum: Number(obj.sum),
    name: obj.name
  }));

  let icon = faCircleDollarToSlot;
  const spenders = highestValues.map((obj, i) => {
    console.log(obj.name)
    if (obj.name === 'FOOD_AND_DRINK') {
      icon = faUtensils
    } else if (obj.name === 'MEDICAL') {
      icon = faBriefcaseMedical;
    } else if (obj.name === 'TRANSPORTATION') {
      icon = faCar;
    } else if (obj.name === 'HOME_IMPROVEMENT' || 'RENT_AND_UTILITIES') {
      icon = faHouse;
    } else if (obj.name === 'TRAVEL') {
      icon = faPlane;
    } else if (obj.name === 'GOVERNMENT_AND_NON_PROFIT' || 'PERSONAL_CARE') {
      icon = faHandHoldingHeart;
    } else if (obj.name === 'ENTERTAINMENT') {
      icon = faIcons;
    } 
   

    return (
      <div className="category" key={i}>
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="info">
          <div>{formatTitle(obj.name)}</div>
          <div>{`$ ${obj.sum.toLocaleString()}`}</div>
        </div>
      </div>
    )
  });

  return (
    <>
    <h3>Where Most of Your Budget Is Spent</h3>
    <div className="top-spending">
      {spenders}
    </div>
    </>
  )


}