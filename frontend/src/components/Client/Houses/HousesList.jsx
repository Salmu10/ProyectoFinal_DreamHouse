import React from 'react';
import HouseCard from './HouseCard';

export default function HousesList ({ houses }) {

    const nohouses = houses.length == 0 ? false : true;

    return  (
        <div className="card-list">
            <p className='no_houses' hidden={nohouses}>Sorry, there are no houses available with those filters</p>
            {
                houses.map(( house, index ) => (
                    <HouseCard key={index} house={house}/>
                ))
            }
        </div>
    )
}