import "../Create/Addmember.css";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Edit = (props) => {
  const year = props.prop.dob.slice(0, 4);
  const month = props.prop.dob.slice(5, 7);
  const date = year + "-" + month + "-" + props.prop.dob.slice(8, 10);

  const [name, setName] = useState(props.prop.name);
  const [photo, setPhoto] = useState(props.prop.path);
  const [role, setRole] = useState(props.prop.role);
  const [department, setDepartment] = useState(props.prop.dept);
  const [empid, setEmpid] = useState(props.prop.emp_id);
  const [dob, setDate] = useState(date);
  const [email, setEmail] = useState(props.prop.email);
  const [location, setLocation] = useState(props.prop.location);
  const [contact, setPhone] = useState(props.prop.contact);

  const history = useNavigate();
  const [file, setFile] = useState(props.prop.path);

  const updateUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", photo);
    formData.append("name", name);
    formData.append("role", role);
    formData.append("department", department);
    formData.append("empid", empid);
    formData.append("dob", dob);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("contact", contact);
    formData.append("id", props.prop.id);

    console.log(photo);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post("/update", formData, config);

    console.log(res);

    if (res.data.status === 201) {
      history("/");
      confirmAlert({
        title: "Account updated",
        message: "Your account was updated.",
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

  // image

  function handleChange(e) {
    console.log(e.target.files);
    setPhoto(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  // next page
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  //select items
  const roles = [
    "Network administrator",
    "User experience designer",
    "Systems analyst",
    "Database administrator",
    "Software application packager",
    "Full-stack developer",
    "Data scientist",
    "Cloud engineer",
  ];
  const Departments = [
    "Business Development",
    "Sales & Marketing",
    "Development",
    "Test Team",
    "Architecture",
    "Operations",
    "Customer Support",
  ];

  return (
    <div className="Forms">
      <h2>Add New Member</h2>
      <div
        className="upload-image"
        style={{
          display: isActive ? "none" : "",
        }}
      >
        <img src={file} alt="profile" />
        <br />
        <br />
        <input
          type="file"
          style={{ marginLeft: "10%" }}
          onChange={handleChange}
          name="photo"
          accept="image/*"
        />
      </div>
      <div
        id="next"
        style={{
          display: isActive ? "none" : "",
        }}
      >
        <button className="submit-upload" onClick={handleClick}>
          Next&nbsp;&nbsp;
          <FaArrowCircleRight style={{ fontSize: "10px" }} />
        </button>
      </div>
      <div
        className="form"
        id="myForm"
        style={{
          display: isActive ? "" : "none",
        }}
      >
        <div className="left-form">
          <label>Name</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <br></br>
          <label>Role</label>
          <br></br>
          <select
            name="role"
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            required
          >
            <option>Please choose one option</option>
            {roles.map((val, index) => {
              return <option key={index}>{val}</option>;
            })}
          </select>
          <br></br>
          <label>Department</label>
          <br></br>
          <select
            name="department"
            id="Department"
            onChange={(event) => setDepartment(event.target.value)}
            value={department}
            required
          >
            <option>Please choose one option</option>
            {Departments.map((val, index) => {
              return <option key={index}>{val}</option>;
            })}
          </select>
          <br></br>
          <label>Employee ID (eg. 2342)</label>
          <br></br>
          <input
            type="text"
            value={empid}
            onChange={(event) => setEmpid(event.target.value)}
            placeholder="Enter your Employee Id"
            required
            pattern="[0-9]*"
          />
          <br></br>
        </div>
        <div className="right-form">
          <label>Date of Birth</label>
          <br></br>
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={dob}
            date
            required
          />
          <br></br>
          <label>Email ID</label>
          <br></br>
          <input
            type="email"
            value={email}
            placeholder="Enter your Mail Id"
            onChange={(event) => setEmail(event.target.value)}
            email
            required
          />
          <br></br>
          <label>Location</label>
          <br></br>
          <input
            placeholder="Enter your working location"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            required
          />
          <br></br>
          <label>Contact Number</label>
          <br></br>
          <input
            type="phone"
            placeholder="Enter your mobile number"
            onChange={(event) => setPhone(event.target.value)}
            value={contact}
            pattern="[0-9]*"
            required
          />
          <br />
          <button className="Submit-new" onClick={updateUserData}>
            Update&nbsp;&nbsp;
            <FaArrowCircleRight style={{ fontSize: "10px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
