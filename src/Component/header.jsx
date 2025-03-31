import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/userSlice";




function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartItems.length);
      const userDtls = useSelector((state) => state.user.userDtl);
  
  return (
    <header style={{background: "#0f4e6d", display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "fixed", width: "100%", zIndex: "10"}}>
      <div className="logo">
        <h1>Mini Mart</h1>
       
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h2>Welcome to Our Store</h2>
      <p>Find the best products at unbeatable prices.</p>
      </div>

      <nav>
        <ul style={{  display: "flex", alignItems: "center" }}>
        {userDtls?.email != undefined && userDtls?.email != "" ? <button onClick={() => dispatch(clearUser()) }>Log Out</button> :
             <button onClick={() => navigate('/login')}>Login</button>}
          <li><a href="/"><b>Home</b></a></li>
          <li><a href="/"><b>Contact</b></a></li>
          <li><a href="/cart"><b> <IconButton color="primary">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon href="/cart" />
            </Badge>
          </IconButton></b></a></li>
        </ul>
      </nav>
    </header>

  )
}

export default Header