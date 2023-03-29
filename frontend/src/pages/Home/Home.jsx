import React, { useState } from 'react';
import './Home.scss';
import { useHouses } from "../../hooks/useHouses";
import { useNavigate } from "react-router-dom";
import HousesMap from "../../components/Client/Map/HousesMap";
import Search from "../../components/Search/Search";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";

export default function Home() {
    const navigate = useNavigate();
    const {houses} = useHouses();
    const [show, setShow] = useState(null);

    const apply_filters = (filters) => {
        console.log(filters);
        const filters_url = btoa(JSON.stringify(filters));
        navigate('/houses/' + filters_url);
        // getHousesFiltered(filters);
    }

    return (
        houses.length === 0 ? <SpinnerLoading/> :
        <div className="home_container">
            <div className="title">
                <h1>Find your property in Spain</h1>
            </div>
            <Search apply_filters={apply_filters}/>
            <h1>Houses Map</h1>
            <div className='maps'>
                <HousesMap houses={houses} setShow={setShow}/>
            </div>
        </div>
    )
}