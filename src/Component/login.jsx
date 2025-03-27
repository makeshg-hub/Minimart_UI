import React, { useState,  } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const Login = () => {
  const [user, setUser] =useState( {
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      email: e.target.value,
    }));
  };

  const handleChangePassword = (e) => {
    setUser((prevVal) => ({
      ...prevVal,
      password: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      toast.warning("Please fill all the field");
      return;
    }
    const data = {
      email: user.email,
      password: user.password,
    };
    try {
      const respone = await axios.post(
        "http://localhost:8083/api/cart/login",
        data
      );
      toast.success("Login Successful");
      navigate("/")
      console.log(respone.data);
    } catch (err) {
      toast.error(
        "An error occured" +
          (err.respone ? err.respone.data.message : err.message)
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form action="/login" method="post">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            {/* <input type="email" id="email" name="email" required /> */}
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
            <label htmlFor="password">Password</label>
            {/* <input type="password" id="password" name="password" required /> */}
            <TextField
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChangePassword}
              required
            />
          </div>
          <Button onClick={handleSubmit}>Login</Button>
          <div className="links">
            <Link to="/forgotpage">Forgot Password?</Link>
            <Link to="/register">Create an Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
