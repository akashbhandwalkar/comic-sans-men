import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import homeImage from './../../assets/home-wallpaper-1.jpg'
class CustomCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <img src={homeImage} />
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                </div>
            </Carousel>
        );
    }
}

export default CustomCarousel;