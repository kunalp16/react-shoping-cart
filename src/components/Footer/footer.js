import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small unique-color-dark">

                <div className="container text-center text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Company name</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>
                                <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!">Bootstrap Angular</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>
                                <a href="#!">Your Account</a>
                            </p>
                            <p>
                                <a href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>

                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>
                                <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p>
                                <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
            </footer>

        )
    };
}

export default Footer;