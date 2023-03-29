// import './StationCard.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { useStations } from "../../hooks/useStations";
import { useHouses } from "../../hooks/useHouses";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";
// import SlotsList from "../../components/Client/Rent/SlotsList";

export default function HouseDetails ({ }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const { oneHouse, getOneHouse } = useHouses();

    useEffect(function () {
        getOneHouse(id);
    }, [])

    return (
        // stationSlots.length > 0 ? <SlotsList station={oneStation} slots={stationSlots}/> : <p>No stations available</p>
        <div className="house_container">
            <div className="title">
                <h1>House details</h1>
            </div>
            <p>{oneHouse.id}</p>
            <p>{oneHouse.location}</p>
            <p>{oneHouse.country}</p>
        </div>
    )
}