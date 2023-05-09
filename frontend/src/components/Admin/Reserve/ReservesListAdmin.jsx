import React from 'react';
import './ReservesListAdmin.scss';
import ReservesCardAdmin from './ReservesCardAdmin';

export default function ReservesListAdmin ({ reserves, deleteReserve }) {

    return  (
        <div className="rents_list_container">
            <h1>Reserves List</h1>
            <table className="table" border="1">
                <thead className="thead_rents_list">
                    <tr>
                        <th>ID</th>
                        <th>Initial Date</th>
                        <th>End Date</th>
                        <th>Total price</th>
                        <th>User ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody_rents_list">
                    {
                        reserves.map(( reserve, index ) => (
                            <ReservesCardAdmin key={index} reserve={reserve} deleteReserve={deleteReserve}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}