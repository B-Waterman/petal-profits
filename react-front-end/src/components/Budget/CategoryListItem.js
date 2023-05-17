export default function CategoryListItem(props) {


  return (
    <div className="category">
      <h1>{props.name}</h1>
      <h4>{props.amount}</h4>
    </div>
  )
}
  