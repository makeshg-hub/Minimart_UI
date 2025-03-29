import Header from "./header";
import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.jpg"
import Footer from "./footer";
import { groceryData } from "./mock.js";
import { Grid } from "@mui/material";
import GroceryCategories from "./Groceries.jsx";
import { useEffect, useState } from "react";


const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {

  }
  useEffect (() => {
    console.log(cartItems, "cartItems");
  },[cartItems])
  return (
    <>

      <section className="products">
        {/* <h2>Featured Products</h2> */}
        <div className="product-grid">
          <GroceryCategories setCartItems={setCartItems}/>

        
        </div>
      </section>
      <Footer />

    </>
  );
};

export default Homepage;
