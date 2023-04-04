import './HouseCard.scss';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import secrets from '../../../secrets';

export default function HouseCard ({ house }) {
    const navigate = useNavigate();

    const redirects = {
        details: (id) => navigate('/house/' + id),
    }

    return (
        <div>
            <div className="card 1" onClick={() => redirects.details(house.id)}>
                <div className="card_image">
                    <img src={`${secrets.URL_BACKEND}${house.image}`}/>
                    {/* <img src="/assets/house.png"/>  */}
                </div>
                <div className="card_title">
                    <p>{house.location}, {house.country}</p>
                </div>
            </div>
        </div>
    )
}