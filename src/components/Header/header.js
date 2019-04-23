import React, { Component } from 'react';
import logo from '../../images/shopping_cart_logo.png';
import { Route, Link } from 'react-router-dom';
import Classes from "../Header/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    render() {
        return (
            <header className={Classes.header}>
                <Link to="/" className="float-left nav-link">
                    <img className={Classes.logo} src={logo} alt="shopping_cart_logo" />
                </Link>
                <ul className="nav justify-content-end " >
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link active">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/wishlist" className="nav-link">Wishlist   <FontAwesomeIcon icon="heart" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mycart" className="nav-link">My Cart <span className="badge badge-light">4</span></Link>
                    </li>
                </ul>
            </header >

        )
    };
}

export default Header;