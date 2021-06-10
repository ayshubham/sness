import React from 'react'
import './Navbar.css';

export const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
            <ul className='nav-menu'>
                <div className='logo'><h1>S A R V H</h1></div>
                <li className='nav-item'>MEN</li>
                <li className='nav-item'>WOMMEN</li>
                <button className='nav-button'>SIGN UP</button>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar
