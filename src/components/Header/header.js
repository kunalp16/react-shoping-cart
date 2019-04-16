import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header>
                <a className=" float-left nav-link" href="#">Shoping cart</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link active">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/wishlist" className="nav-link">Wishlist</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/mycart" className="nav-link">My Cart</Link>
                    </li>
                </ul>

            </header >

        )
    };
}

export default Header;