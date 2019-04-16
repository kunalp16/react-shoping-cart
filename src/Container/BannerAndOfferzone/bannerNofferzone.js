import React, { Component } from 'react';
import Carousel from "../../components/carousel/carousel";
import Offerzone from "../../components/OfferZone/offerZone";


class BannerAndOfferZone extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Offerzone />
            </div>

        )
    };
}

export default BannerAndOfferZone;