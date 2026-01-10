import { useState } from "react";
import "./assets/app.css";

import { useRef } from "react";

// Form Controls

// Root Component
function App() {
  // Value States
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [jobRole, setJobRole] = useState("");

  const usernameRef = useRef();
  const emailRef = useRef();
  const jobroleRef = useRef();

  // Error States
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [jobRoleError, setJobRoleError] = useState("");

  // Validate Username Function
  function valiDateUsername(username) {
    const nameRegex = /^[a-zA-Z0-9]+$/;

    let isUsernameValid = true;

    if (username === "") {
      setUserNameError("Username cannot be empty");
      isUsernameValid = false;
      return isUsernameValid;
    }

    if (!nameRegex.test(username)) {
      setUserNameError("Username cannot contain special characters");
      isUsernameValid = false;
      return isUsernameValid;
    }

    setUserNameError("");
    return isUsernameValid;
  }

  // Validate Email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isEmailValid = true;

    if (email === "") {
      setEmailError("Email cannot be empty");
      isEmailValid = false;
      return isEmailValid;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Email is invalid");
      isEmailValid = false;
      return isEmailValid;
    }

    setEmailError("");
    return isEmailValid;
  }

  // Validate Jobrole
  function validateJobRole(jobRole) {
    let isJobRoleValid = true;

    if (jobRole === "developer" || jobRole === "tester") {
      setJobRoleError("");
    } else {
      isJobRoleValid = false;
      setJobRoleError("Kindly choose a job role");
    }

    return isJobRoleValid;
  }

  // OnSubmit Function
  function handleSubmit(e) {
    e.preventDefault();

    /* For Controlled Components */
    // let isUsernameValid = valiDateUsername(userName);
    // let isEmailValid = validateEmail(email);
    // let isJobRoleValid = validateJobRole(jobRole);

    /* For Uncontrolled Components */
    let isUsernameValid = valiDateUsername(usernameRef.current.value);
    let isEmailValid = validateEmail(emailRef.current.value);
    let isJobRoleValid = validateJobRole(jobroleRef.current.value);


    if (isUsernameValid && isEmailValid && isJobRoleValid) {
      console.log(`userName: ${usernameRef.current.value}`);
      console.log(`email: ${emailRef.current.value}`);
      console.log(`jobRole: ${jobroleRef.current.value}`);
    } else {
      alert("Form data is Invalid");
    }
  }

  return (
    /* For Controlled Components */

    // <form onSubmit={handleSubmit} noValidate>
    //   <div className="form-group">
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       name=""
    //       id="username"
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     {userNameError && <p className='error'>{userNameError}</p>}
    //   </div>

    //   <div className="form-group">
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       name=""
    //       id="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     {emailError && <p className='error'>{emailError}</p>}
    //   </div>

    //   <div className="form-group">
    //     <label htmlFor="jobrole">Email:</label>
    //     <select
    //       name=""
    //       id="jobrole"
    //       onChange={(e) => setJobRole(e.target.value)}
    //     >
    //       <option value="">Select a job role</option>
    //       <option value="developer">Developer</option>
    //       <option value="tester">Tester</option>
    //     </select>
    //     {jobRoleError && <p className='error'>{jobRoleError}</p>}
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>

    /* For Uncontrolled Components */
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" name="" id="username" ref={usernameRef} />
        {userNameError && <p className="error">{userNameError}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="" id="email" ref={emailRef} />
        {emailError && <p className="error">{emailError}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="jobrole">Email:</label>
        <select name="" id="jobrole" ref={jobroleRef}>
          <option value="">Select a job role</option>
          <option value="developer">Developer</option>
          <option value="tester">Tester</option>
        </select>
        {jobRoleError && <p className="error">{jobRoleError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
