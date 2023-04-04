import './HouseCard.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import secrets from '../../../secrets';
import { useHouses } from "../../../hooks/useHouses";

export default function HouseCard ({ house }) {
    const navigate = useNavigate();
    const { oneHouseServices, getOneHouse } = useHouses();

    useEffect(function () {
        if (house.id !== '') {
            getOneHouse(house.id);
        }
    }, [])

    const redirects = {
        details: (id) => navigate('/house/' + id),
    }

    return (
        <div className="house_card" onClick={() => redirects.details(house.id)}>
            <div className="card-image">
                <img src={`${secrets.URL_BACKEND}${house.image}`}/>
            </div>
            <div className="card_bio">
                <div className="card_title">
                    <h3 className="title">{house.location}, {house.country}</h3>
                    <h3 className="price">{house.price}€</h3>
                </div>
                <div className='card_services'>
                    <p>Rooms: {oneHouseServices.rooms}</p>
                    <p>Bathrooms: {oneHouseServices.bathrooms}</p>
                </div>
            </div>
        </div>
    )
}