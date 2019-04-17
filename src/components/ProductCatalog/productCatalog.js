import React, { Component } from 'react';
import Classes from '../ProductCatalog/productCatalog.css';

class ProductCatalog extends Component {
    render() {
        return (
            <div className={Classes.catalog}>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Electronics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mens</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Womens</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Kids</a>
                    </li>
                </ul>
            </div>
        )
    };
}

export default ProductCatalog;