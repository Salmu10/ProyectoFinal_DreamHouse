import './HouseDetails.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useHouses } from "../../hooks/useHouses";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";
import HouseMap from '../../components/Client/Map/HouseMap';
import CarouselHouseImages from '../../components/Carousel/CarouselHouseImages';

export default function HouseDetails ({ }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const { oneHouse, oneHouseServices, oneHouseImages, getOneHouse } = useHouses();

    useEffect(function () {
        getOneHouse(id);
    }, [])

    console.log(oneHouseImages.main_image);

    return (
        oneHouse === '' ? <SpinnerLoading/> :
        <div className="house_container">
            <div className="title">
                <h1>House details</h1>
            </div>
            <div className="house_info">
                <CarouselHouseImages house={oneHouse}/>
                <div className="house_bio">
                    <p>{oneHouse.id}</p>
                    <p>{oneHouse.location}</p>
                    {/* <img src={oneHouseImages.main_image}/> */}
                    <p>{oneHouse.country}</p>
                    <p>{oneHouseServices.rooms}</p>
                    <p>{oneHouseServices.bathrooms}</p>
                </div>
            </div>

            <div className="house_map">
                <HouseMap house={oneHouse}/>
            </div>
        </div>
    )
}