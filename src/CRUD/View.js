import "../main-body/Section.css";
import "./View.css";
import {
  FaUserAlt,
  FaMailBulk,
  FaSearchLocation,
  FaBirthdayCake,
  FaPhoneAlt,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";
import Edit from "./Update/Edit";
import Popup from "../Pop-up/Popup";
import React, { useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import Delete from "./Delete";

function View(prop) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopups, setButtonPopups] = useState(false);

  const year = prop.v.dob.slice(0, 4);
  const month = prop.v.dob.slice(5, 7);
  const date = prop.v.dob.slice(8, 10) + "-" + month + "-" + year;

  const [value, setvalue] = useState("");
  const [heading, setHeading] = useState("");
  return (
    <>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Edit prop={prop.v} />
      </Popup>
      <Popup trigger={buttonPopups} setTrigger={setButtonPopups}>
        <Delete prop={prop.v} />
      </Popup>
      <div className="Bio-Data">
        <div className="user-profiles">
          <img src={`${prop.v.path}`} className="photos" alt="profile" />
          <div className="view-Details">
            <h2>{prop.v.name}</h2>
            <p>{prop.v.role}</p>
            <p>{prop.v.dept}</p>
          </div>
        </div>
        <div className="more-info">
          <label>
            {heading}
            {value}
          </label>
          <div className="view-info">
            <button>
              <FaUserAlt
                className="view-page-icon"
                onClick={() => {
                  setHeading("Employee ID:- ");
                  setvalue(prop.v.emp_id);
                }}
              />
            </button>
            <button>
              <FaBirthdayCake
                className="view-page-icon"
                onClick={() => {
                  setHeading("Date of Birth:- ");
                  setvalue(date);
                }}
              />
            </button>
            <button>
              <FaMailBulk
                className="view-page-icon"
                onClick={() => {
                  setHeading("Email ID:- ");
                  setvalue(prop.v.email);
                }}
              />
            </button>
            <button>
              <FaSearchLocation
                className="view-page-icon"
                onClick={() => {
                  setHeading("Location:- ");
                  setvalue(prop.v.location);
                }}
              />
            </button>
            <button>
              <FaPhoneAlt
                className="view-page-icon"
                onClick={() => {
                  setHeading("Contact No:- ");
                  setvalue(prop.v.contact);
                }}
              />
            </button>
          </div>
        </div>
        <div className="edit-del">
          <button className="Edit-Del" onClick={() => setButtonPopup(true)}>
            Edit&nbsp;&nbsp;
            <FaRegEdit />
          </button>
          <button className="Edit-Del" onClick={() => setButtonPopups(true)}>
            Delete&nbsp;&nbsp;
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </>
  );
}

export default View;
