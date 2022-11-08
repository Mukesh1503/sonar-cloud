import "./Addmember.css";
import React, { useState,useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Addmember(props) {

  const [photo, setPhoto] = useState("");

  const initialValues = {name: "", role: "", department: "",empid: "",dob: "",email: "",location: "",contact: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const history = useNavigate();

  const setimgfile = (e) => {
    setPhoto(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  const addUserData = async () => {
      
    let formData = new FormData();
    formData.append("photo", photo);
    formData.append("name", formValues.name);
    formData.append("role", formValues.role);
    formData.append("department", formValues.department);
    formData.append("empid", formValues.empid);
    formData.append("dob", formValues.dob);
    formData.append("email", formValues.email);
    formData.append("location", formValues.location);
    formData.append("contact", formValues.contact);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post("/register", formData, config);

    if (res.data.status === 201) {
      history("/");
      props.setfalse(false);
      confirmAlert({
        title: "Account created",
        message: "Your account was created.",
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

  const validate = (values) => {
    const errors = {};

    const userregrex = /[a-z]$/i
    const Emailregex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const contactregrex = /^[0-9]*$/i

    if (!values.name) {
      errors.name = "Username is required!";
    }else if(!userregrex.test(values.name)){
      errors.name = "username should be alphabets"
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!Emailregex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.empid) {
      errors.empid = "Employee ID is required";
    } else if (values.empid.length < 4) {
      errors.empid = "Employee ID must be more than 4 characters";
    }
    if(!values.location){
      errors.location = "Location is required";
    }
    if(!values.contact){
      errors.contact = "contact is required";
    }else if(values.contact.length != 10 || !contactregrex.test(values.contact)){
      errors.contact = "This is not a valid mobile number"
    }
    if(!values.dob){
      errors.dob = "Date of Birth is required"
    }else if((new Date().getFullYear() - (new Date(values.dob)).getFullYear()) < 18){
      errors.dob = "Age should be greater than 18"
    }
    if(values.role == "Please choose one option" || values.role == ""){
      errors.role = "Role is required"
    }
    if(values.department == "Please choose one option" || values.department ==""){
      errors.department = "Department is required"
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      addUserData()
    }
  }, [formErrors]);

  // image
  const [file, setFile] = useState();

  // next page
  const [isActive, setIsActive] = useState(false);

  // image validation
  const [isclicked, setIsclick] = useState(false);

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

      {/* First page */}
      <div
        className="upload-image"
        style={{
          display: isActive ? "none" : "",
        }}
      >
        <img src={file} alt="" style={{ display: isclicked ? "" : "none" }} />
        <br />
        <br />
        <input
          type="file"
          onChange={setimgfile}
          name="photo"
          style={{ marginLeft: "10%" }}
          onClick={() => setIsclick(true)}
          accept="image/*"
        />
      </div>
      <div
        id="next"
        style={{
          display: isActive ? "none" : "",
        }}
      >
        <button className="submit-upload" onClick={()=>setIsActive(true)}>
          Next&nbsp;&nbsp;
          <FaArrowCircleRight style={{ fontSize: "10px" }} />
        </button>
      </div>

      {/* Second page */}
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
            onChange={handleChange}
            value ={formValues.name} 
            name="name"
            placeholder="Enter your name"
          />
          <p>{formErrors.name}</p>
          <br />
          <label>Role</label>
          <br></br>
          <select
            name="role"
            onChange={handleChange}
            value ={formValues.role} 
            id="role"
            required
          >
            <option>Please choose one option</option>
            {roles.map((val, index) => {
              return <option key={index}>{val}</option>;
            })}
          </select>
          <p>{formErrors.role}</p>
          <br />
          <label>Department</label>
          <br></br>
          <select
            name="department"
            onChange={handleChange}
            value ={formValues.department} 
            id="Department"
            required
          >
            <option>Please choose one option</option>
            {Departments.map((val, index) => {
              return <option key={index}>{val}</option>;
            })}
          </select>
          <p>{formErrors.department}</p>
          <br />
          <label>Employee ID (eg. 2342)</label>
          <br></br>
          <input
            type="text"
            onChange={handleChange}
            name="empid"
            placeholder="Enter your Employee Id"
            value ={formValues.empid} 
          />
          <p>{formErrors.empid}</p>
          <br />
        </div>
        <div className="right-form">
          <label>Date of Birth</label>
          <br></br>
          <input
            type="date"
            onChange={handleChange}
            name="dob"
            value ={formValues.dob} 
          />
          <p>{formErrors.dob}</p>
          <br />
          <label>Email ID</label>
          <br></br>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your Mail Id"
            value ={formValues.email} 
          />
          <p>{formErrors.email}</p>
          <br />
          <label>Location</label>
          <br></br>
          <input
            name="location"
            onChange={handleChange}
            placeholder="Enter your working location"
            value ={formValues.location} 
          />
          <p>{formErrors.location}</p>
          <br />
          <label>Contact Number</label>
          <br></br>
          <input
            type="phone"
            name="contact"
            onChange={handleChange}
            placeholder="Enter your mobile number"
            value ={formValues.contact} 
          />
          <p>{formErrors.contact}</p>
          <br />
          <button className="Submit-new" onClick={handleSubmit}>
            Submit&nbsp;&nbsp;
            <FaArrowCircleRight style={{ fontSize: "10px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addmember;
