import './HouseDetails.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useHouses } from "../../hooks/useHouses";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";
import HouseMap from '../../components/Client/Map/HouseMap';
import CarouselHouseImages from '../../components/Carousel/CarouselHouseImages';
import secrets from '../../secrets';

export default function HouseDetails ({ }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const { oneHouse, oneHouseServices, oneHouseImages, getOneHouse } = useHouses();

    useEffect(function () {
        getOneHouse(id);
    }, [])

    // console.log(oneHouseImages.main_image);

    const price_type = oneHouse.category === 1 ? '€' : oneHouse.category === 2 ? '€/month' : '€/nigth';

    return (
        oneHouse === '' ? <SpinnerLoading/> :
        <div className="house_container">
            {/* <div className="title">
                <h1>House details</h1>
            </div> */}
            <div className="house_info">
                <div className="house_carousel">
                    <CarouselHouseImages images_list={oneHouseImages.images_list}/>
                </div>
                <div className="house_bio">
                    <p>{oneHouse.location}, {oneHouse.country}</p>
                    <p>{oneHouse.price}{price_type}</p>
                    <p>{oneHouse.id}</p>
                    {/* <img src={oneHouseImages.main_image}/> */}
                    {/* <img src={`${secrets.URL_BACKEND}${oneHouseImages.main_image}`}/> */}
                    <p>{oneHouseServices.rooms}</p>
                    <p>{oneHouseServices.bathrooms}</p>
                </div>
            </div>

            <div className="house_map">
                <div className="title">
                    <h3>House location</h3>
                </div>
                <div className="map">
                    <HouseMap house={oneHouse}/>
                </div>
            </div>
        </div>
    )
}