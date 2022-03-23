import React from 'react';
import Logo from '../../images/logo-small.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='header-container'>
            <img src={Logo} alt="" />
            <div className='menu-container'>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/foods">Foods</a>
                <a href="/offers">Offers</a>
            </div>
        </nav>
    );
};

export default Header;