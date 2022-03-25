import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h2>this is Cart</h2>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;