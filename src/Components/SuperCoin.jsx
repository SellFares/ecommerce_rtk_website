import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (totalAmount < 100) {
      setSuperCoins(0);
    } else if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else {
      setSuperCoins(30);
    }
  }, [totalAmount]);
  
  return (
    <div>
      <p>Total Items in Cart: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
      <p>Super Coins Earned: {superCoins}</p>
    </div>
  );
};

export default SuperCoin;
