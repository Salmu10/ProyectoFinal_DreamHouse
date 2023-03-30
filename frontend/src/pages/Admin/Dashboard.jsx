import React from "react";
import './Dashboard.scss';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const redirects = {
        houses: () => navigate('/dashboard/houses'),
        users: () => navigate('/dashboard/users'),
        // rents: () => navigate('/dashboard/rents'),
        // icidents: () => navigate('/dashboard/incidents'),
    }
    
    return (
        <div className="dashboard_container">
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className="buttons_box">
                <button className="button" onClick={() => redirects.houses()}><span>Houses List</span></button>
                <button className="button" onClick={() => redirects.users()}><span>Users List</span></button>
                {/* <button className="button" onClick={() => redirects.rents()}><span>Rents List</span></button> */}
                {/* <button className="button" onClick={() => redirects.icidents()}><span>Incidents List</span></button> */}
            </div>
        </div>
    )
}

export default Dashboard