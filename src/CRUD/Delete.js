import React, { useState } from "react";
import './Delete.css'
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";

function Delete(props) {

  const [Password,setPassword] = useState("")
  const [values, setvalues] = useState("");

  const dltUser = async (id) => {
    console.log(id);
    const res = await axios.delete(`/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 201) {
      console.log("Deleted successfully");
      confirmAlert({
        title: "Delete Account",
        message: "Your account was Deleted successfully.",
        buttons: [
          {
            label: "OK",
            onClick: () => window.location.reload(false),
          },
        ],
      });
    } else {
      console.log("error");
    }
  };

  function adminPassword(){
    if(Password=="Mkd123@"){
        dltUser(props.prop.id)
    }
  }
  return (
  <div id="DeleteComponent">
    <center>
    <label>Admin Password</label><br /><br />
    <input type="password" placeholder="password" onChange={(event)=>setPassword(event.target.value)}/><br />
    <div id="notValid">{values}</div>
    <button className="Delete_button" onClick={function(event){ adminPassword();setvalues("Incorrect Password");}}>confirm</button>
    </center>
  </div>
  )
}

export default Delete;
