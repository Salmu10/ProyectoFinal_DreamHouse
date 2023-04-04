import React from 'react';
import { useNavigate } from "react-router-dom";
import './HousesCardAdmin.scss';

export default function HousesCardAdmin ({ house, index, deleteHouse }) {

    const navigate = useNavigate();

    const redirects = {
        update: (slug) => navigate('/dashboard/houses/update/' + slug),
    }

    return (
        <tr>
            <td className="id_col">{house.id}</td>
            <td>{house.country}</td>
            <td>{house.location}</td>
            <td>{house.price}</td>
            <td>{house.address}</td>
            <td>{house.latitude}</td>
            <td>{house.longitude}</td>
            <td> 
                <button className="buttons" onClick={() => redirects.update(house.id)}>Edit</button>
                <button className="buttons" onClick={() => deleteHouse(house.id)}>Delete</button>
            </td>
        </tr>
    )
}