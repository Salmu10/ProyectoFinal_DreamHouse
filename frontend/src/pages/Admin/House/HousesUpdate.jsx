import React, { useEffect } from "react";
import HousesForm from "../../../components/Admin/House/HousesForm";
import { useHouses } from "../../../hooks/useHouses";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HousesUpdate({ }) {
    const { id } = useParams();
    const { getOneHouse, oneHouse, oneHouseServices, oneHouseImages, isCorrect, updateHouse } = useHouses(id);
    const form_type = 'update';
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== '') {
            getOneHouse(id);
        }
        if (isCorrect) {
            navigate('/dashboard/houses');
        }
    }, [isCorrect, navigate]);

    return (
        <div className="house_update_container">
            <div className="title">
                <h1>Update House</h1>
            </div>
            <HousesForm house={oneHouse} houseServices={oneHouseServices} houseImages={oneHouseImages} form_type={form_type} sendData={(data) => updateHouse(id, data)}/>
        </div>
    )
}
