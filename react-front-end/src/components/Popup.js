import React from "react";
import './Popup.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Popup(props) {


  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <a href="#" className="close" onClick={()=> props.setTrigger(false)}/>
        {props.children}
      </div>
    </div>
  ):"";
}
