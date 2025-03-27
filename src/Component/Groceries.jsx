import React, { useState } from "react";
import { groceryData } from "./mock";
import product1 from "../assets/product1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";



import {
    Card,
    CardContent,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Paper,
} from "@mui/material";
 

const GroceryCategories = ({setCartItems}) => {
    const [selectedCategory, setSelectedCategory] = useState("Fruits & Vegetables");
    const [crtItems, setCrtItems] = useState([]);
    const dispatch = useDispatch();


    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const handleAddToCart = (item) => {
        console.log(item)
        setCrtItems([...crtItems, item]);
        setCartItems([...crtItems, item]);
        dispatch(addToCart([...crtItems, item]))
        //dispatch(removeFromCart(item.id))
        //dispatch(clearCart())


    }

    return (
        <div style={{ padding: "20px", width: "100%" }}>

            {/* Category Cards */}
            <Grid container xs={12} sx={{display:"flex", justifyContent: "center"}} >
                {groceryData.map((category) => (
                    <Grid item xs={12/7} key={category.category} >
                        <Card
                            onClick={() => handleCategoryClick(category.category)}
                            style={{
                                cursor: "pointer",
                                backgroundColor:
                                    selectedCategory === category.category ? "#e0f2f1" : "#fff",
                                border:
                                    selectedCategory === category.category
                                        ? "2px solid #26a69a"
                                        : "1px solid #ddd",
                            }}
                            elevation={3}
                        >
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    fontWeight="bold"
                                >
                                    {category.category}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Product List */}
            {selectedCategory && (
                <Grid Container xs={12} sx={{display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "center"}}>
                    {/* <Grid item xs={12} >
                        {selectedCategory}
                    </Grid> */}
                    {groceryData
                        .find((cat) => cat.category === selectedCategory)
                        .products.map((product, index) => (

                            <Grid item xs={3} className="product-card">
                                <img src={product1} alt="Product 1" />
                                {product.name}
                                ₹{product.price}
                                <button onClick={() => { handleAddToCart(product) }} className="btn">
                                    Add to Cart
                                </button>
                            </Grid>

                        ))}

                </Grid>
                // <Paper
                //   elevation={4}
                //   style={{ marginTop: "20px", padding: "16px", backgroundColor: "#fafafa" }}
                // >
                //   <List>
                //     {groceryData
                //       .find((cat) => cat.category === selectedCategory)
                //       .products.map((product, index) => (
                //         <ListItem
                //           key={index}
                //           divider
                //           style={{ display: "flex", justifyContent: "space-between" }}
                //         >
                //           <ListItemText primary={product.name} />
                //           <Typography variant="body1">₹{product.price}</Typography>
                //         </ListItem>
                //       ))}
                //   </List>
                // </Paper>
            )}
        </div>
    );
};

export default GroceryCategories;
