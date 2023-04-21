import React, { useState } from 'react';
import { useHouses } from "../../../hooks/useHouses";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ReservesList({ reserve }) {

    const { houses } = useHouses();
    const [seen, setSeen] = useState(false);

    let location = "";
    let address = "";

    houses.map((house) => {
        if (reserve.house_id == house.id) {
            location = house.location;
            address = house.address;
        }
    })

    return (
        <div className="alert alert-dismissible fade show" role="alert" hidden={seen}>
            You have a reserve on <strong>{address}, {location}</strong> from {reserve.initial_date} to {reserve.end_date}.
            <FontAwesomeIcon className='seen_btn' icon="fa-solid fa-check" onClick={() => setSeen(true)}/>
        </div>
    )
}