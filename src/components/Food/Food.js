import React from 'react';
import './Food.css'
const Food = (props) => {
    const { addToCart, food } = props
    const { strMeal, strCategory, strInstructions, strArea, strMealThumb } = food;
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div className='food-info'>
                <h2 className='food-name'>Name: {strMeal}</h2>
                <span className='additional'>
                    <h6>Category: {strCategory}</h6>
                    <h6>Popular in: {strArea}</h6>
                </span>
                <p>{strInstructions.slice(0, 250)}</p>
                <button className='cart-btn' onClick={() => addToCart(strMeal)}>Add To Cart</button>
            </div>

        </div>
    );
};

export default Food;