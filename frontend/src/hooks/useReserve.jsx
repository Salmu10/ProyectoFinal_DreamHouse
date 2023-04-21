import {useContext, useCallback, useEffect, useState} from 'react';
import ReserveService from '../services/ReserveService';
import { toast } from "react-toastify";

export function useReserve() {
    const [reserves, setReserves] = useState([]);
    const [houseReserves, setHouseReserves] = useState([]);
    const [userReserves, setUserReserves] = useState([]);

    const getHouseReserves = useCallback((house_id) => {
        ReserveService.getHouseReserves(house_id)
            .then(({data}) => {
                setHouseReserves(data);
                // console.log(data);
            })
            .catch(e => console.error(e));
    }, [houseReserves]);

    const getUserReserves = useCallback((user_id) => {
        ReserveService.getUserReserves(user_id)
            .then(({data}) => {
                setUserReserves(data);
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
                setReserves(data);
                toast.success("The reserve has been made successfully");
                console.log(data);
            })
            .catch(e => console.error(e));
    }, []);

    const sendEmail = useCallback((data) => {
        ReserveService.sendEmail(data)
            .then(({data, status}) => {
                console.log(data);
                if (status === 200) {
                    toast.success(data.data);
                }
            })
            .catch(e => console.error(e));
    }, []);

    return { reserves, setReserves, houseReserves, setHouseReserves, userReserves, setUserReserves, getHouseReserves, getUserReserves, makeReserve, sendEmail }

}