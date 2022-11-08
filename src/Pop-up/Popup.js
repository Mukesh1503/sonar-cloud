import React from "react";
import "./Popup.css";
import { FaRegWindowClose } from "react-icons/fa";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup-box">
      <div className="box">
        <FaRegWindowClose
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
