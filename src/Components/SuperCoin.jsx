import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SuperCoin.css';

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
    <div className="super-coins-container">
      <div className="super-coins-info">
        <h3>Super Coins Rewards</h3>
        <div className="coins-display">
          <span className="coin-icon">🪙</span>
          <span className="coin-amount">{superCoins}</span>
        </div>
        <div className="cart-details">
          <p>Total Items in Cart: {totalQuantity}</p>
          <p>Total Amount: ${totalAmount}</p>
          <p>Super Coins Earned: {superCoins}</p>
        </div>
      </div>
    </div>
  );
};

export default SuperCoin;
