import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/header';
import Carousel from './components/carousel/carousel';
import Footer from './components/Footer/footer';
import Offerzone from './components/OfferZone/offerZone';
import ProductCatalog from './components/ProductCatalog/productCatalog';
class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <ProductCatalog />
        <Carousel />
        <Offerzone />
        <Footer />
      </div>

    );
  }
}

export default App;
