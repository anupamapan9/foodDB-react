import React from 'react';
import './Cart.css'
const Cart = (props) => {

    return (
        <div className='cart'>
            <h2>Name:{props.meals} </h2>
        </div>
    );
};

export default Cart;