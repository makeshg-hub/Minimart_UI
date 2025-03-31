import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { groceryData } from "./mock";
import product1 from "../assets/product1.jpg";
import { Card, CardContent, Typography, Grid, Button, CardActions } from "@mui/material";

const GroceryCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState("Fruits & Vegetables");
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, id: item.id || item.name }));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const getItemQuantity = (id) => {
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : 0;
    };

    return (
        <Grid container sx={{ padding: "20px", height: "90vh", marginTop: "5rem" }}>
            {/* Fixed Category List */}
            <Grid
                item
                xs={3}
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    padding: 2,
                    borderRight: "2px solid #ddd",
                    marginTop: "4rem",
                    maxHeight:"86%",
                    overflowX:"hidden",
                    overflowY:"auto"
                }}
            >
                {groceryData.map((category) => (
                    <Card
                        key={category.category}
                        onClick={() => handleCategoryClick(category.category)}
                        style={{
                            cursor: "pointer",
                            backgroundColor: selectedCategory === category.category ? "#e0f2f1" : "#fff",
                            border: selectedCategory === category.category ? "2px solid #26a69a" : "1px solid #ddd",
                            marginBottom: "10px",
                            maxHeight: "3rem",
                        }}
                        elevation={3}
                    >
                        <CardContent>
                            <Typography variant="subtitle1" align="center" fontWeight="bold">
                                {category.category}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Grid>

            {/* Scrollable Product List */}
            <Grid
                item
                xs={9}
                sx={{
                    marginLeft: "20%",
                    padding: "20px",
                }}
                container
                spacing={2}
            >
                {selectedCategory &&
                    groceryData
                        .find((cat) => cat.category === selectedCategory)
                        .products.map((product) => (
                            <Grid item xs={3} key={product.id}>
    <Card
        elevation={3}
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            height: "24rem",
            padding: 2,
        }}
    >
        {/* Image */}
        <img
            src={product.img? product.img :  product1}
            alt="Product"
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />

        {/* Product Info - This will stretch to fill space */}
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">₹{product.price}</Typography>
        </CardContent>

        {/* Add to Cart Button - Stays at the Bottom */}
        <CardActions sx={{ width: "100%", justifyContent: "center", paddingBottom: "10px" }}>
            {getItemQuantity(product.id) === 0 ? (
                <Button variant="contained" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                </Button>
            ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button variant="contained" onClick={() => handleRemoveFromCart(product.id)}>-</Button>
                    <Typography sx={{ margin: "0 10px" }}>{getItemQuantity(product.id)}</Typography>
                    <Button variant="contained" onClick={() => handleAddToCart(product)}>+</Button>
                </div>
            )}
        </CardActions>
    </Card>
</Grid>

                        ))}
            </Grid>
        </Grid>
    );
};

export default GroceryCategories;
