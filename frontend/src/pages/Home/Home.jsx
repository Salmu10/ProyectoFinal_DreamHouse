import React, { useState, useEffect } from 'react';
import './Home.scss';
import { useHouses } from "../../hooks/useHouses";
import { useNavigate } from "react-router-dom";
import HousesMap from "../../components/Client/Map/HousesMap";
import Search from "../../components/Search/Search";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";

export default function Home() {
    const navigate = useNavigate();
    const { houses, getAllHouses } = useHouses();
    const [show, setShow] = useState(null);

    useEffect(() => {
        getAllHouses();
    }, []);

    const apply_filters = (filters) => {
        const filters_url = btoa(JSON.stringify(filters));
        navigate('/houses/' + filters_url);
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