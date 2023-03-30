import React from 'react';
import './HousesListAdmin.scss';
import { useNavigate } from "react-router-dom";

import HousesCardAdmin from './HousesCardAdmin';

export default function HousesListAdmin ({ houses, deleteHouse }) {

    const navigate = useNavigate();

    const redirects = {
        add_house: () => navigate('/dashboard/houses/add'),
    }

    return  (
        <div className="houses_list_container">
            <h1>Houses List</h1>
            <button className="button add_button" onClick={() => redirects.add_house()}>Add house</button>
            <table className="table" border="1">
                <thead className="thead_houses_list">
                    <tr>
                        <th>ID</th>
                        <th>Country</th>
                        <th>Location</th>
                        <th>Image</th>
                        <th>price</th>
                        <th>address</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody_houses_list">
                    {
                        houses.map(( house, index ) => (
                            <HousesCardAdmin key={index} house={house} deleteHouse={deleteHouse}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}