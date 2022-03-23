import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Items.css'
const Items = () => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, []);
    const addToCart = (food) => {
        const newCart = [...cart, food]
        setCart(newCart)
        console.log(cart)
    }

    return (
        <div className='container'>
            <div className='food-container'>
                {
                    items.map(food => <Food food={food} key={food.idMeal} addToCart={addToCart}></Food>)
                }
            </div>

            <div className='cart-container'>
                <h2>Cart</h2>

                <Cart meals={cart}></Cart>)

            </div>
        </div>
    );
};

export default Items;