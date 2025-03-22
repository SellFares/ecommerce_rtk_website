import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    /*
    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && total < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300 && total < 400) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);
    */

    /*
    useEffect(() => {
        const coinRules = [
            { min: 100, max: 199.99, coins: 10 },
            { min: 200, max: 299.99, coins: 20 },
            { min: 300, max: 399.99, coins: 30 },
            { min: 400, max: Infinity, coins: 40 }, // Add this line
        ];

        const earnedCoins = coinRules.find(rule => totalAmount >= rule.min && totalAmount <= rule.max)?.coins || 0;
        setSuperCoins(earnedCoins);
    }, [totalAmount]);
    */

    useEffect(() => {
        const calculatedCoins = Math.floor(totalAmount / 100) * 10;
        setSuperCoins(calculatedCoins);
    }, [totalAmount]);

    return (
        <div className="super-coins" style={{ textAlign: 'center' }}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">
                You will earn {superCoins} super coins with this purchase.
            </p>
        </div>
    )
};

export default SuperCoin;