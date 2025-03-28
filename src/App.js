import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Component/homepage";
import Forgot from "./Component/forgotpage";
import Login from "./Component/login";
import Register from "./Component/register";
import Change from "./Component/changepassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Component/Cart";
import Header from "./Component/header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="home">{children}</div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/forgotpage" element={<Forgot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepassword" element={<Change />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
