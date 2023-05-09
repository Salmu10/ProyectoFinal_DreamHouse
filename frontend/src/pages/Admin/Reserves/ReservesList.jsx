import React, { useEffect } from 'react';
import { useReserve } from "../../../hooks/useReserve";
import ReservesListAdmin from "../../../components/Admin/Reserve/ReservesListAdmin";

export default function ReservesList({ }) {

    const {reserves, getReserves, deleteReserve} = useReserve();

    useEffect(function () {
        getReserves();
    }, [])

    console.log(reserves);

    return (
        <ReservesListAdmin reserves={reserves} deleteReserve={deleteReserve}/>
    )
}