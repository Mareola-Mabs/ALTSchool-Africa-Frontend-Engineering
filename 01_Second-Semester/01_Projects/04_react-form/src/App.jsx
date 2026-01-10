import { useState } from "react";
import "./assets/app.css";
import { set } from "react-hook-form";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });

  const [errorData, setErrorData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateData(value) {
    let isAllValidated = true;

    const nameRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (value.username === "") {
      setErrorData({
        ...errorData,
        usernameError: "Username cannot be empty",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (!nameRegex.test(value.username)) {
      setErrorData({
        ...errorData,
        usernameError: "Username cannot contain special characters",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (value.email === "") {
      setErrorData({
        emailError: "Email cannot be empty",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (!emailRegex.test(value.email)) {
      setErrorData({
        emailError: "Email is invalid",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (value.date === "") {
      setErrorData({
        dateError: "Date cannot be empty",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (!dateRegex.test(value.date)) {
      setErrorData({
        dateError: "Date is Invalid",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (value.password === "" || value.confirmPassword === "") {
      setErrorData({
        passwordError: "Passwords cannot be empty",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (value.password.length < 8 || value.confirmPassword.length < 8) {
      setErrorData({
        passwordError: "Passwords should be greater than 8",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    if (value.password !== value.confirmPassword) {
      setErrorData({
        passwordError: "Passwords do not match",
      });
      isAllValidated = false;
      return isAllValidated;
    }

    setErrorData({});
    return isAllValidated;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isAllValidated = validateData(formData);

    if (!isAllValidated) {
      alert("Form Data is Invalid");
      console.log(errorData);
    } else {
      console.log(formData);
    }
  }

  function handleReset() {
    setFormData({
      username: "",
      email: "",
      date: "",
      password: "",
      confirmPassword: "",
    });

    setErrorData({});
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
        <h1>Register</h1>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            onInput={handleChange}
          />
          {errorData.usernameError && (
            <p className="error">{errorData.usernameError}</p>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onInput={handleChange}
          />
          {errorData.emailError && (
            <p className="error">{errorData.emailError}</p>
          )}

          <label htmlFor="date">Date of Birth</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
            onInput={handleChange}
          />
          {errorData.dateError && (
            <p className="error">{errorData.dateError}</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            onInput={handleChange}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            onInput={handleChange}
          />
          {errorData.passwordError && (
            <p className="error">{errorData.passwordError}</p>
          )}

          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
