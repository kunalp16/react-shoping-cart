import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Carousel from './components/carousel/carousel';
import Footer from './components/Footer/footer';
import Offerzone from './components/OfferZone/offerZone';
import ProductCatalog from './components/ProductCatalog/productCatalog';
import BannerAndOfferZone from './Container/BannerAndOfferzone/bannerNofferzone'
import Login from './components/Login/login';
import MyCart from './components/MyCart/myCart';
import Wishlist from './components/Whishlist/wishlist';
import Signup from './components/Signup/signup';

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
