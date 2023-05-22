import React, {useContext} from 'react';
import { categoriesContext } from './providers/CategoriesProvider';
import Accordion from './Accordion';

export default function Income(props) {

  const { categories } = useContext(categoriesContext)

  // //pull out income category sum
  let sum;
  let id;
  categories.forEach((obj) => {
    if (obj.name === 'INCOME') {
    sum = obj.sum;
    id = obj.id;
    }
  });

  const total = (sum * -1).toLocaleString();

  return (
    <div className="income">
    <Accordion
      total={`$ ${total}`} title="Monthly Income" id={id}
    />
    </div>
  )
}