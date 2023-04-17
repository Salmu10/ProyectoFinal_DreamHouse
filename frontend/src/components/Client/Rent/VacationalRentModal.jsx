import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { useReserve } from "../../../hooks/useReserve";
import { DayPicker } from 'react-day-picker';
import { format, differenceInDays } from 'date-fns';
import 'react-day-picker/dist/style.css';

export default function VacationalRentModal({ house }) {

    const navigate = useNavigate();
    const { user, isAuth, isAdmin, logout } = useContext(AuthContext);
    const { houseReserves, getHouseReserves, makeReserve } = useReserve();
    const [range, setRange] = useState([]);
    const [reservePrice, setReservePrice] = useState(0);

    // const testdates = {from: new Date(2023, 3, 20), to: new Date(2023, 3, 25)};
    const disabledDays = [{ from: new Date(), to: new Date(0, 1, 1) }];

    useEffect(function () {
        if (house.id) {
            getHouseReserves(house.id);
        }
    }, [])

    useEffect(function () {
        if (range?.from) {
            if (!range.to) {
              setReservePrice(0);
            } else if (range.to) {
                const startdate = format(range.from, 'y-MM-dd');
                const enddate = format(range.to, 'y-MM-dd');
                const diffInDays = differenceInDays(new Date(enddate), new Date(startdate));
                setReservePrice(diffInDays * house.price);
            }
        } else {
            setReservePrice(0);
        }
    }, [range])

    const cancel_reserve = () => {
        setRange('');
    }

    const reserve = (id) => {
        if (!isAuth) {
            navigate('/login');
        } else {
            if (range.from && range.to) {
                const startdate = format(range.from, 'y-MM-dd');
                const enddate = format(range.to, 'y-MM-dd');
                makeReserve(id, startdate, enddate, reservePrice);
                setRange('');
            }
        }
    }

    console.log(houseReserves);

    return (
        <div className="modal fade" id="reserveModal" tabIndex="-1" role="dialog" aria-labelledby="reserveModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title text-uppercase fw-bold" id="staticBackdropLabel">Make a Reserve</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className='datepicker'>
                                <DayPicker defaultMonth={new Date()} numberOfMonths={1} mode="range" disabled={disabledDays} min={2} max={31} selected={range} onSelect={setRange}/>
                            </div>
                            <div className="price_box">
                                <p className="night_price">Night Price: {house.price}€</p>
                                <p className="total_price">Total Price: {reservePrice}€</p>
                            </div>
                            <div className="actions_box">
                                <button type="button" className="confirm_button" data-bs-dismiss="modal" aria-label="Close" onClick={() => reserve(house.id)}>Confirm</button>
                                <button type="button" className="cancel_button" data-bs-dismiss="modal" aria-label="Close" onClick={() => cancel_reserve()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}