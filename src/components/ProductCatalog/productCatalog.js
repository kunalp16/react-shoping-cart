import React, { Component } from 'react';

class ProductCatalog extends Component {
    render() {
        return (
            <ul className="nav productCatalogBg">
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
            </ul>
        )
    };
}

export default ProductCatalog;