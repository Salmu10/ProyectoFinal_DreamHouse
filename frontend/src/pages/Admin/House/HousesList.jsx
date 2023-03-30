import React from "react";
import { useHouses } from "../../../hooks/useHouses";
import HousesListAdmin from "../../../components/Admin/House/HousesListAdmin";

export default function HousesList({ }) {
    
    const {houses, deleteHouse} = useHouses();

    return (        
        <HousesListAdmin houses={houses} deleteHouse={deleteHouse}/>
    )
}
