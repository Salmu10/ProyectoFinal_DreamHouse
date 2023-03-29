import {useContext, useCallback, useEffect, useState} from 'react';
import HouseService from '../services/HouseService';
import HousesContext from "../context/HousesContext";
import { toast } from "react-toastify";

export function useHouses() {
    const {houses, setHouses} = useContext(HousesContext);
    const [oneHouse, setOneHouse] = useState({});
    const [oneHouseServices, setOneHouseServices] = useState({});
    // const [housesFiltered, setHousesFiltered] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const getOneHouse = useCallback((id) => {
        HouseService.getOneHouse(id)
            .then(({data}) => {
                setOneHouse(data);
                HouseService.getOneHouseServices(data.id)
                    .then(({data}) => {
                        setOneHouseServices(data);
                    })
                    .catch(e => console.error(e));
            })
            .catch(e => console.error(e));
    }, [oneHouse]);

    const getHousesFiltered = useCallback((filters = {}) => {
        HouseService.getHousesFiltered(filters)
            .then(({data, status}) => {
                if (status == 200) {
                    const total_houses = data.total_houses;
                    const pages = Math.ceil(total_houses / 3);
                    setHouses(data.houses);
                    setTotalPages(pages);
                }
            })
            .catch(e => console.error(e));
    }, []);



    return { isCorrect, houses, setHouses, oneHouse, setOneHouse, oneHouseServices, setOneHouseServices, totalPages, setTotalPages, getOneHouse, getHousesFiltered }

}