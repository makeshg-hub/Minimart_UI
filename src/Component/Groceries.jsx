import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../redux/cartSlice";
import { groceryData } from "./mock";
import product1 from "../assets/product1.jpg";

import {
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
} from "@mui/material";

const GroceryCategories = ({ setCartItems }) => {
    const [selectedCategory, setSelectedCategory] = useState("Fruits & Vegetables");
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const handleAddToCart = (item) => {
        const itemWithId = { ...item, id: item.id || item.name };
        dispatch(addToCart(itemWithId));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const getItemQuantity = (id) => {
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : 0;
    };

    return (
        <div style={{ padding: "20px", width: "100%" }}>
            {/* Category Cards */}
            <Grid container spacing={2} justifyContent="center">
                <Button onClick={() => { dispatch(clearCart()) }}>Clear</Button>
                {groceryData.map((category) => (
                    <Grid item key={category.category}>
                        <Card
                            onClick={() => handleCategoryClick(category.category)}
                            style={{
                                cursor: "pointer",
                                backgroundColor: selectedCategory === category.category ? "#e0f2f1" : "#fff",
                                border: selectedCategory === category.category ? "2px solid #26a69a" : "1px solid #ddd",
                            }}
                            elevation={3}
                        >
                            <CardContent>
                                <Typography variant="subtitle1" align="center" fontWeight="bold">
                                    {category.category}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Product List */}
            {selectedCategory && (
                <Grid container spacing={2} justifyContent="center">
                    {groceryData
                        .find((cat) => cat.category === selectedCategory)
                        .products.map((product) => (
                            <Grid item xs={3} key={product.id} className="product-card">
                                <img src={product1} alt="Product 1" />
                                <Typography>{product.name}</Typography>
                                <Typography>₹{product.price}</Typography>

                                {/* Show Add to Cart or Quantity Controls */}
                                {getItemQuantity(product.id) === 0 ? (
                                    <Button variant="contained" onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </Button>
                                ) : (
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Button variant="contained" onClick={() => handleRemoveFromCart(product.id)}>-</Button>
                                        <Typography style={{ margin: "0 10px" }}>{getItemQuantity(product.id)}</Typography>
                                        <Button variant="contained" onClick={() => handleAddToCart(product)}>+</Button>
                                    </div>
                                )}
                            </Grid>
                        ))}
                </Grid>
            )}
        </div>
    );
};

export default GroceryCategories;
