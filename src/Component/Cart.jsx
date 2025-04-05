import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";
import { Card, CardContent, Typography, Button, Grid, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./header";
import notAv from "../assets/pictures/imgNot.jpg"
import axios from "axios";



const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const userDtls = useSelector((state) => state.user.userDtl);

    const handleOrderPlaced = async () => {
        if(userDtls?.email == undefined || userDtls?.email == "" ){
            toast.error("Please Login to Place Order")
            return;
        }
        const data  = {id: 1,email:userDtls?.email,  items: cartItems};
        
         try {
              const respone = await axios.post(
                "https://minimart-50025724243.development.catalystappsail.in/api/order/saveOrder",
                data
              );
              dispatch(clearCart())
              toast.success("Order Placed")        
              navigate("/")
            } catch (err) {
              toast.error(
                "An error occured" +
                  (err.respone ? err.respone.data.message : err.message)
              );
            }
       


    }

    console.log(cartItems, "cartItemscartItems")


    return (
        <>
        <div className ="home">
        <div style={{ padding: "20px", margin: "auto" , color: "white"}}>
            <Typography variant="h4" align="center" gutterBottom>
                Your Cart
            </Typography>

            {cartItems.length === 0 ? (
                <Typography variant="h6" align="center">Your Cart is Empty</Typography>
            ) : (
                <Grid container xs={12} >
                    {cartItems.map((item) => (
                        <Grid item sx={{ margin: "5px" }} xs={3.9} key={item.id}>
                            <Card elevation={3} >
                                <CardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                    <img
            src={item.img? item.img :  notAv}
            alt="Product"
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />
                                        </div><div>
                                        <Typography variant="h6">{item.name}</Typography>
                                        <Typography variant="body1">Price: ₹{item.price}</Typography>
                                    </div>

                                    {/* Quantity Selector UI */}
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        border: "2px solid black",
                                        borderRadius: "20px",
                                        padding: "5px 10px",
                                    }}>
                                        <IconButton
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            size="small"
                                            color="error"
                                            sx={{ width: "1rem" }}
                                        >
                                            {item.quantity > 1 ? <RemoveIcon /> : <DeleteIcon />}
                                        </IconButton>

                                        <Typography style={{ margin: "0 10px", fontWeight: "bold" }}>
                                            {item.quantity}
                                        </Typography>

                                        <IconButton
                                            onClick={() => dispatch(addToCart(item))}
                                            size="small"
                                            color="primary"
                                            sx={{ width: "1rem" }}

                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Clear Cart Button */}
            {cartItems.length > 0 && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <Typography variant="h5">Total: ₹{totalPrice}</Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => dispatch(clearCart())}
                        style={{ marginTop: "10px", maxWidth: "10rem" }}
                    >
                        Clear Cart
                    </Button>
                    <Tooltip title= {userDtls?.email != undefined && userDtls?.email != "" ? "Place Order" : "Please Login to place Order" } ><Button
                        variant="contained"
                        color="primary"
                        onClick={() => { handleOrderPlaced() }}
                        style={{ marginTop: "10px", maxWidth: "10rem", marginLeft: "10px" }}
                    >
                        Place Order
                    </Button>
                    </Tooltip>
                </div>
            )}
        </div>
        </div>
        </>
    );
   
};

export default Cart;

