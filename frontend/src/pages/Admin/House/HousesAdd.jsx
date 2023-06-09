import React, { useEffect } from "react";
import HousesForm from "../../../components/Client/Houses/HousesAddForm";
import { useHouses } from "../../../hooks/useHouses";
import { useNavigate } from "react-router-dom";

export default function HousesAdd({ }) {
    const { isCorrect, addHouse } = useHouses();
    const form_type = 'create';
    const navigate = useNavigate();

    useEffect(() => {
        if (isCorrect) {
            navigate('/dashboard/houses');
        }
    }, [isCorrect, navigate]);

    return (
        <div className="house_add_container">
            <div className="title">
                <h1>Create House</h1>
            </div>
            <HousesForm form_type={form_type} sendData={(formData) => addHouse(formData)}/>
        </div>
    )
}