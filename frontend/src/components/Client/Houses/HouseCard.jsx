import './HouseCard.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import secrets from '../../../secrets';
import { useHouses } from "../../../hooks/useHouses";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    const category = house.category === 1 ? 'For sale' : house.category === 2 ? 'Rent' : 'Vacational rent';

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
                    <p>{house.address}</p>
                    <p>Available for: {category}</p>
                    {/* <p><FontAwesomeIcon icon="fa-solid fa-bed"/> {oneHouseServices.rooms}</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-shower"/> {oneHouseServices.bathrooms}</p> */}
                </div>
            </div>
        </div>
    )
}