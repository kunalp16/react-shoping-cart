import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import WishListItem from '../WishList/WishListItem/wishListItem';
class MyCart extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <WishListItem />
                    </div>
                    <div className="col-md-4">
                        <h4>PRICE DETAILS</h4>
                        <p>Price <span className="float-right">256</span></p>
                        <p>Delivery Charges  <span className="float-right">256</span></p>
                         <hr className="my-4" />
                        <p>Amount Payable  <span className="float-right">256</span></p>
                    </div>
                </div>
            </div>
        )
    };
}

export default MyCart;