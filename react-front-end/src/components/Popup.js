import React from "react";
import './Popup.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={()=> props.setTrigger(false)}>
        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" style={{color: "#ff0000",}} />        </button>
        {props.children}
      </div>
    </div>
  ):"";
}