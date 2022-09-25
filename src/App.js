// import logo from './logo.svg';
import './App.css';
import Navbar from './Header/Header';
import Product from './Product/Product';
// import { BrowserRouter,  Route ,Routes } from 'react-router-dom'
import Cart from './cart/Cart';
import React, { useState,  useEffect } from "react";
function App() {
  
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

    useEffect(() => {
    console.log("cart change");
  }, [cart]);


 
  return (
  <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Product handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
}

export default App;
