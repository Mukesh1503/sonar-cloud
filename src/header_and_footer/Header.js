import { FaPlus, FaAlignJustify, FaRegWindowClose } from "react-icons/fa";
import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import Popup from "../Pop-up/Popup";
import Addmember from "../CRUD/Create/Addmember";
import "./Header.css";

function Header() {

  // popup box
  const [buttonPopup, setButtonPopup] = useState(false);

  // sidebar portion
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* linking Addmember with popup box */}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Addmember setfalse={setButtonPopup} />
      </Popup>

      <div className="header">
        <img
          src="https://iamneo.ai/wp-content/uploads/2022/07/iamneo-logo.png"
          alt=""
        />
        <div className="nav-item">

          {/* header */}
          <button
            className="header-display"
            onClick={() => setButtonPopup(true)}
          >
            <span>
              <FaPlus />
            </span>
            Add New Members
          </button>
          <span className="hamburger">
            <FaAlignJustify className="hamburger" onClick={showSidebar} />
          </span>

          {/* sidebar */}
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <FaRegWindowClose
                  className="close-icon"
                  onClick={showSidebar}
                />
              </li>
              <button
                style={{ width: "202px", marginLeft: "25px", display: "unset" }}
                onClick={() => setButtonPopup(true)}
              >
                <div onClick={showSidebar}>
                  <span>
                    <FaPlus />
                  </span>
                  Add New Members
                </div>
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
