import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useStations } from "../../hooks/useStations";
// import CaruselItem from "./caruselItem";
import './CarouselHouseImages.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselHouseImages({ house = [] }) {

    // const data = house.map(item => {
    //     return { img: item.image, id: item.id };
    // })

    const imgs = [
        "https://www.drivespark.com/img/2018/02/rent-a-bike-at-most-metro-stations-in-bangalore2-1519188283.jpg",
        "https://ychef.files.bbci.co.uk/live/624x351/p014kc76.jpg",
        "https://live.staticflickr.com/65535/48880444927_64a3d3c655_b.jpg"
    ]

    // const carusel_items = data.map((item, index) => <SwiperSlide key={index}><CaruselItem data={item} /></SwiperSlide> )

    return (
        <div className="carousel">
            <Carousel className="carouselDiv" showArrows={true} autoPlay={true} showThumbs={false}>
                {imgs.map((URL, index) => (
                    <div className="img1" key={index} style={{backgroundImage: 'url("'+URL+'")'}}/> 
                ))}
            </Carousel>

            {/* <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                {carusel_items}
            </Swiper> */}
        </div>
    )
}
