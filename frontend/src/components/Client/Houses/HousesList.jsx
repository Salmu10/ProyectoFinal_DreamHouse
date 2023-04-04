import React from 'react';
import HouseCard from './HouseCard';

export default function HousesList ({ houses }) {
    return  (
        <div className="card-list">
            {
                houses.map(( house, index ) => (
                    <HouseCard key={index} house={house}/>
                ))
            }
        </div>
    )
}