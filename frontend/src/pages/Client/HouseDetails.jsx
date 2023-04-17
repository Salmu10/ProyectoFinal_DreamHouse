import './HouseDetails.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useHouses } from "../../hooks/useHouses";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";
import HouseMap from '../../components/Client/Map/HouseMap';
import CarouselHouseImages from '../../components/Carousel/CarouselHouseImages';
import VacationalRentModal from '../../components/Client/Rent/VacationalRentModal';

// import { MdOutlineBathroom } from 'react-icons/fa';
import { MdOutlineBathroom, MdOutlineBedroomParent, MdPool } from "react-icons/md";
import { AiOutlineEuro, AiOutlineWifi, AiFillCar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { TbHomeDollar } from "react-icons/tb";

export default function HouseDetails ({ }) {

    const navigate = useNavigate();
    const { id } = useParams();
    const { oneHouse, oneHouseServices, oneHouseImages, getOneHouse } = useHouses();

    useEffect(function () {
        getOneHouse(id);
    }, [])

    const category = oneHouse.category === 1 ? 'For sale' : oneHouse.category === 2 ? 'Rent' : 'Vacational rent';
    const action = oneHouse.category === 3 ? <button type="button" className="reserve_button" data-bs-toggle="modal" data-bs-target="#reserveModal">Reserve</button>
        : <button type="button" className="reserve_button" >Contact</button>;
    const modal_type = oneHouse.category === 3 ? <VacationalRentModal house={oneHouse}/> : '';
    const price_type = oneHouse.category === 1 ? '€' : oneHouse.category === 2 ? '€/month' : '€/night';
    const wifi = oneHouseServices.wifi == true ? false : true;
    const pool = oneHouseServices.pool == true ? false : true;
    const parking = oneHouseServices.parking == true ? false : true;

    return (
        oneHouse === '' ? <SpinnerLoading/> :
        <div className="house_container">
            <div className="house_info">
                <div className="house_carousel">
                    <CarouselHouseImages images_list={oneHouseImages.images_list}/>
                </div>
                <div className="house">
                    <div className="house_bio">
                        <p className='location'>{oneHouse.location}, {oneHouse.country}</p>
                        <p className='category'><TbHomeDollar className='icon me-2'/>{category}</p>
                        <p className='price'><AiOutlineEuro className='icon me-2'/>{oneHouse.price}{price_type}</p>
                        <p className='address'><IoLocationSharp className='icon me-1'/>{oneHouse.address}</p>
                        <p className='rooms'><MdOutlineBedroomParent className='icon me-2'/>{oneHouseServices.rooms}</p>
                        <p className='bathrooms'><MdOutlineBathroom className='icon me-2'/>{oneHouseServices.bathrooms}</p>
                        <p className='wifi' hidden={wifi}><AiOutlineWifi className='icon me-2'/>Wifi</p>
                        <p className='pool' hidden={pool}><MdPool className='icon me-2'/>Pool</p>
                        <p className='parking' hidden={parking}><AiFillCar className='icon me-2'/>Parking</p>
                        <p></p>
                    </div>
                    <div className="reserve_box">
                        {action}
                        {/* <button type="button" className="reserve_button" data-bs-toggle="modal" data-bs-target="#reserveModal">{action}</button> */}
                    </div>
                </div>
            </div>
            {modal_type}
            <div className="house_map">
                <div className="title">
                    <h3>House location</h3>
                </div>
                <div className="map">
                    <HouseMap house={oneHouse}/>
                </div>
            </div>


        </div>
    )
}