import { useState } from 'react';
import './changepassword.css';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Change = ()=>{
  const [user,setUser]=useState({
    token:"",
    password:"",
    confirmPassword:""
  })
  const nav = useNavigate()
  const handleChangeToken=(e)=>{
    setUser((prevVal)=>({
      ...prevVal,
      token:e.target.value
    }))
  }
  const handleChangePassword=(e)=>{
    setUser((prevVal)=>({
      ...prevVal,
      password:e.target.value
    }))
  }
  const handleChangeConfirmPassword=(e)=>{
    setUser((prevVal)=>({
      ...prevVal,
      confirmPassword:e.target.value
    }))
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    if(user.password!==user.confirmPassword){
      alert("Password Do Not Match")
      return
    }else if(user.password=="" || user.token ==""|| user.confirmPassword==""){
      toast.error("Please Fill all the field")
      return
    }
    const data ={
      token:user.token,
      newPassword:user.password
    }
    try{
      const response=await axios.post("http://localhost:8083/api/cart/reset-password",data)
      toast.success("Password Changed")
      nav("/homepage")
      console.log(response.data)
    }catch(err){
      toast.error("An error occured"+(err.response?err.response.data.message:err.message))
      

    }
  }
    return(
        <div className="change-container">
      <div className="change-form">
        <h1>Change Password</h1>
        <p>Enter a code sent to your email</p>

        <form action="">
          <div className="change-group">
            <label htmlFor="token">Verification code</label>
            {/* <input type="text" id="text" name="text" /> */}
            <TextField  
              type="text"
              id="text"
              name="text"
              value={user.token}
              onChange={handleChangeToken}
              required
            />
          </div>
          <div className="change-group">
            <label htmlFor="password">New Password</label>
            {/* <input type="password" id="password1" name="password" /> */}
            <TextField
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChangePassword}
            required
            />
          </div>
          <div className="change-group">
            <label htmlFor="password">Confirm Password</label>
            {/* <input type="password" id="password2" name="password" /> */}
            <TextField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
            />

          </div>
            <Button onClick={handleSubmit}>Submit</Button>
            <div className="links">
              <a href="#">Back</a>
            </div>
          
        </form>
      </div>
    </div>

    )
}
export default Change