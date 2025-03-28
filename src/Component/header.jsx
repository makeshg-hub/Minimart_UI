import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  return (
    <header>
      <div className="logo">
        <h1>Mini Mart</h1>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>

      <nav>
        <ul style={{ background: "#1c5777", display: "flex", alignItems: "center" }}>
          <li><a href="#"><b>Home</b></a></li>
          <li><a href="#"><b>Contact</b></a></li>
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