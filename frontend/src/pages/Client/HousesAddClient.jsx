import React, { useEffect } from "react";
import HousesAddForm from "../../components/Client/Houses/HousesAddForm";
import { useHouses } from "../../hooks/useHouses";
import { useNavigate } from "react-router-dom";

export default function HousesAddClient({ }) {
    const { isCorrect, addHouse } = useHouses();
    const navigate = useNavigate();

    useEffect(() => {
        if (isCorrect) {
            navigate('/home');
        }
    }, [isCorrect, navigate]);

    return (
        <div className="house_add_container">
            <div className="title">
                <h1>Create House</h1>
            </div>
            <HousesAddForm sendData={(formData) => addHouse(formData)}/>
        </div>
    )
}