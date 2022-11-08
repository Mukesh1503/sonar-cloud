import "./Section.css";
import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import Popup from "../Pop-up/Popup";
import View from "../CRUD/View";

function Section(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <View v={props.sec} />
      </Popup>
      <div className="section">
        <div className="user-profile">
          <img src={`${props.sec.path}`} className="photo" alt=""></img>
        </div>
        <div className="Details">
          <h2>{props.sec.name}</h2>
          <p>{props.sec.role}</p>
          <p>{props.sec.dept}</p>
        </div>
        <button className="view-btn" onClick={() => setButtonPopup(true)}>
          View Details
        </button>
      </div>
    </>
  );
}

export default Section;
