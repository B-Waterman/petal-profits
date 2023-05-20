import { useState } from "react";
import AccordionItem2 from "./AccordionItem2";

export default function Accordion2(props) {

  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
     return setClicked("0");
    }
    setClicked(index);
   };

  return (
    <ul className="accordion">
        <AccordionItem2 
          title={props.title}
          total={props.total}
          categoryId={props.id}
          onToggle={() => handleToggle(props.id)}
          active={clicked === props.id}
        />
    </ul>
  )
}