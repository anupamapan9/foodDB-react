import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Items.css'
const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, [])
    return (
        <div className='food-container'>
            {
                items.map(food => <Food food={food} key={food.idMeal}></Food>)
            }
        </div>
    );
};

export default Items;