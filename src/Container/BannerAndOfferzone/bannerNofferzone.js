import React, { Component } from 'react';
import Carousel from "../../Components/Carousel/carousel";
import Offerzone from "../../Components/OfferZone/offerZone";


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