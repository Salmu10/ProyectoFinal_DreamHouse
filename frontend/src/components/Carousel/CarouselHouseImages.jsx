import React from 'react';
import './CarouselHouseImages.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import secrets from '../../secrets';

export default function CarouselHouseImages({ images_list = {} }) {
    return (
        <div className="carousel">
            <Carousel className="carouselDiv" showArrows={true} autoPlay={true} showThumbs={false}>
                {Object.values(images_list).map((img) => (
                    <img key={img.id} src={`${secrets.URL_BACKEND}${img.image_url}`}/>
                ))}
            </Carousel>
        </div>
    )
}
