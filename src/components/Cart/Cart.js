import React from 'react';
import './Cart.css'
const Cart = (props) => {
    
const {strMealThumb,strArea}=props.meals
console.log(strArea)
    return (
        <div className='cart'>
            <img src={strMealThumb} alt="" />
            <div>
                <h1>{strArea}</h1>
            </div>
        </div>
    );
};

export default Cart;