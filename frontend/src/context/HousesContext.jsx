import React, { useState, useEffect } from 'react'
import HouseService from '../services/HouseService';

const Context = React.createContext({})

export function HouseContextProvider({ children }) {
    const [houses, setHouses] = useState([]);

    useEffect(function () {
        HouseService.getAllHouses()
            .then(({data}) => {
                console.log(data);
                setHouses(data);
            })
            .catch(e => console.error(e));
    }, [setHouses]);

    return <Context.Provider value={{ houses, setHouses }}>
        {children}
    </Context.Provider>
}

export default Context