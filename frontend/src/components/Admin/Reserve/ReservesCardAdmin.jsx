import React from 'react';
import './ReservesCardAdmin.scss';

export default function ReservesCardAdmin ({ reserve, index, deleteReserve }) {

    return (
        <tr>
            <td className="id_col">{reserve.id}</td>
            <td>{reserve.initial_date}</td>
            <td>{reserve.end_date}</td>
            <td>{reserve.total_price}</td>
            <td>{reserve.house_id}</td>
            <td> 
                <button className="buttons" onClick={() => deleteReserve(reserve.id)}>Delete</button>
            </td>
        </tr>
    )
}