import React from 'react';
import './Food.css'
const Food = (props) => {
    const { strMeal, strCategory, strInstructions, strArea, strMealThumb } = props.food
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h6>Category: {strCategory}</h6>
            <h6>Popular in: {strArea}</h6>
            <p>{strInstructions.slice(0, 250)}</p>
        </div>
    );
};

export default Food;