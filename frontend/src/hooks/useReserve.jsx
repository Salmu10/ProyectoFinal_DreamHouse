import {useContext, useCallback, useEffect, useState} from 'react';
import ReserveService from '../services/ReserveService';
import { toast } from "react-toastify";

export function useReserve() {
    const [reserves, setReserves] = useState([]);
    const [houseReserves, setHouseReserves] = useState([]);

    const getHouseReserves = useCallback((house_id) => {
        console.log(house_id);
        ReserveService.getHouseReserves(house_id)
            .then(({data}) => {
                console.log(data);
            })
            .catch(e => console.error(e));
    }, []);

    const makeReserve = useCallback((house_id, startdate, enddate, reservePrice) => {

        let data = {
            house_id: house_id,
            initial_date: startdate,
            end_date: enddate,
            total_price: reservePrice,
        }

        ReserveService.createReserve(data)
            .then(({data}) => {
                console.log(data);
            })
            .catch(e => console.error(e));
    }, []);

    return { reserves, setReserves, houseReserves, setHouseReserves, getHouseReserves, makeReserve }

}