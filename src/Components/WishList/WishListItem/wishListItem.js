import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productImg from '../../../images/kids/toddler_bike.jpeg';
import Classes from './wishListItem.css';

class WishlistItem extends Component {
    render() {
        return (
            <div className={Classes.wishListItemContainer}>
                <div className="row">
                    <div className="col-md-2">
                        <img src={productImg} className={Classes.prodImg} />  <br />
                        <div className={Classes.qty + "mt-5"}>
                            <span className={Classes.minus + " bg-dark"}>-</span>
                            <input type="number" className={Classes.count} defaultValue="1" />
                            <span className={Classes.plus + " bg-dark"}>+</span>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h3>Heading of th Product</h3>
                        <h5>Rating 4.5<FontAwesomeIcon icon="star" /></h5>
                        <p>It uses utility clas sNamees for typography and spacing to space content out within the larger container.</p>


                        <a className="btn btn-primary btn-lg" htmlhref="#" role="button">Add to Cart</a>
                        <a className={Classes.removeBtn + " btn btn-primary btn-lg"} htmlhref="#" role="button">Remove</a>
                    </div>
                    <div className="col-md-1">
                        <FontAwesomeIcon icon="trash-alt" />
                    </div>
                </div>
                <hr className="my-4" />
            </div >
        )
    };
}

export default WishlistItem;