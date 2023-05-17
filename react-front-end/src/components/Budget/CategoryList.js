import CategoryListItem from "./CategoryListItem";

export default function CategoryList(props) {

  let categories = [
    {name: 'INCOME', sum: 2700},
    {name: 'ENTERTAINMENT', sum: 49.45},
    {name: 'FOOD_AND_DRINK', sum: 683.38},
    {name: 'GOVERNMENT_AND_NON_PROFIT', sum: 250.00},
    {name: 'HOME_IMPROVEMENT', sum: 525.65},
    {name: 'MEDICAL', sum: 300.00},
    {name: 'PERSONAL_CARE', sum: 72.22},
    {name: 'RENT_AND_UTILITIES', sum: 1268.70},
    {name: 'TRANSPORTATION', sum: 189.46},
    {name: 'TRAVEL', sum: 954.86}
  ]; 




  const items = categories.map((obj) => {
    const amount = '$' + obj.sum.toLocaleString()
    return (
      <CategoryListItem
        name={obj.name}
        amount={amount}
      />
    )
  }
  )

  return (
    <ul>
      {items}
    </ul>
  )
}