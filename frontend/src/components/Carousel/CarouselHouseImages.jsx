import React, { useEffect } from 'react';
import './CarouselHouseImages.scss';
import { useHouses } from "../../hooks/useHouses";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselHouseImages({ house }) {

    const { getOneHouseImages } = useHouses();

    useEffect(() => {
        if (house.id != undefined) {
            getOneHouseImages(house.id);
        }
    }, [house]);

    const imgs = [
        "https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg",
        "https://cdn.pixabay.com/photo/2016/10/16/10/00/cat-1744750__480.jpg",
        "https://cdn.pixabay.com/photo/2015/06/03/13/13/cats-796437__480.jpg",
        "https://cdn.pixabay.com/photo/2017/02/26/14/12/cat-2100306__480.jpg"
    ]

    return (
        <div className="carousel">
            <Carousel className="carouselDiv" showArrows={true} autoPlay={true} showThumbs={false}>
                {imgs.map((URL, index) => (
                    <img key={index} src={URL}/>
                    // <div className="img1" key={index} style={{backgroundImage: 'url("'+URL+'")'}}/>
                ))}
            </Carousel>
        </div>
    )
}
