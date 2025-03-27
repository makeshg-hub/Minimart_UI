import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChangeFirstName = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      firstName: e.target.value,
    }));
  };
  const handleChangeLastName = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      lastName: e.target.value,
    }));
  };
  const handleChangeEmail = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      email: e.target.value,
    }));
  };
  const handleChangePhoneNumber = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      phoneNumber: e.target.value,
    }));
  };
  const handleChangePassword = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      password: e.target.value,
    }));
  };
  const handleChangeConfirmPassword = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      confirmPassword: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: user.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8083/api/cart/sign-up",
        data
      );
      toast.success("Registration successful!");
      console.log(response.data);
    } catch (err) {
      toast.error(err.response.data)
    }
  };
  return (
    <div className="account-container">
      <div className="account-form">
        <h1>Create an Account</h1>
        <form action="/register" method="post">
          <div className="input-group">
            <label htmlFor="firstName">Full Name</label>
            {/* <input type="text" id="firstName" name="firstName" required/> */}
            <TextField
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleChangeFirstName}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            {/* <input type="text" id="lastName" name="lastName" required/> */}
            <TextField
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleChangeLastName}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            {/* <input type="email" id="email" name="email" required/> */}
            <TextField
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            {/* <input type="number" id="phoneNumber" name="phoneNumber" required/> */}
            <TextField
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChangePhoneNumber}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            {/* <input type="password" id="password" name="password" required/> */}
            <TextField
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChangePassword}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            {/* <input type="password" id="confirmPassword" name="confirmPassword" required/> */}
            <TextField
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChangeConfirmPassword}
              required
            />
          </div>
          <Button onClick={handleSubmit}>Sign Up</Button>
          <div className="links">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
