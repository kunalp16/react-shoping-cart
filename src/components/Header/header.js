import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <a className=" float-left nav-link" href="#">Shoping cart</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Signup</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Wishlist</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cart</a>
                    </li>
                </ul>
               
            </header >

        )
    };
}

export default Header;