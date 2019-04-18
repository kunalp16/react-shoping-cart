import React, { Component } from 'react';
import Classes from '../Whishlist/wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Wishlist extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-9">
                        <h3>Heading of th Product</h3>
                        <hr className="my-4" />
                        <p>It uses utility clas sNamees for typography and spacing to space content out within the larger container.</p>
                        <div className={Classes.qty + "mt-5"}>
                            <span className={Classes.minus + " bg-dark"}>-</span>
                            <input type="number" className={Classes.count} name="qty" value="1" />
                            <span className={Classes.plus + " bg-dark"}>+</span>
                        </div>
                        <a className="btn btn-primary btn-lg" htmlhref="#" role="button">Learn more</a>
                    </div>
                    <div className="col-md-1">
                        <FontAwesomeIcon icon="trash-alt" />
                    </div>
                </div>

            </div >
        )
    };
}

export default Wishlist;