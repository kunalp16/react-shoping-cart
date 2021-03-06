import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTrashAlt, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

import Header from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
import ProductCatalog from '../src/components/ProductCatalog/productCatalog';
import BannerAndOfferZone from './Container/BannerAndOfferzone/bannerNofferzone'
import Login from '../src/components/Login/login';
import MyCart from '../src/components/MyCart/myCart';
import Wishlist from '../src/components/WishList/wishlist';
import Signup from '../src/components/Signup/signup';

library.add(fab, faCheckSquare, faCoffee, faTrashAlt, faStar, faHeart)


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <ProductCatalog />
          <Route path="/" exact component={BannerAndOfferZone} />
          <Route path="/login" exact component={Login} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/mycart" exact component={MyCart} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
