import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Filters.scss';

export default function Filters({ apply_filters, delete_filters, filters, mapShow}) {

    const {register, handleSubmit, setValue, formState: {errors} } = useForm();

    const clear_filters = () => {
        setValue("category", '');
        setValue("location", '');
        setValue("min_price", '');
        setValue("max_price", '');
        setValue("rooms", '');
        setValue("bathrooms", '');
        setValue("wifi", '');
        setValue("pool", '');
        setValue("parking", '');
        filters = { page: 1, limit: 4 };
        if (mapShow == true) {
            filters.map = true;
        }
        delete_filters(filters);
    }

    const filter = data => {
        filters = { page: 1, limit: 4 };
        if (data.category != '') {
            filters.category = data.category;
        }
        if (data.location != '') {
            filters.location = data.location;
        }
        if (data.min_price != '') {
            filters.min_price = data.min_price;
        }
        if (data.max_price != '') {
            filters.max_price = data.max_price;
        }
        if (data.rooms != '') {
            filters.rooms = data.rooms;
        }
        if (data.bathrooms != '') {
            filters.bathrooms = data.bathrooms;
        }
        if (data.wifi != '') {
            filters.wifi = data.wifi;
        }
        if (data.pool != '') {
            filters.pool = data.pool;
        }
        if (data.parking != '') {
            filters.parking = data.parking;
        }
        apply_filters(filters);
    };

    useEffect(() => {
        setValue('category', filters.category);
        setValue('location', filters.location);
        setValue("min_price", filters.min_price);
        setValue("max_price", filters.max_price);
        setValue('rooms', filters.rooms);
        setValue('bathrooms', filters.bathrooms);
        setValue('wifi', filters.wifi);
        setValue('pool', filters.pool);
        setValue('parking', filters.parking);
    }, [filters]);

    return (
        <div className="filters">
            <div className="title">
                <h2>Filters</h2>
            </div>
            <form className="forms_form" id="login_form" onSubmit={handleSubmit(filter)}>
                <div className="category_box">
                    <label htmlFor='category' className='etiqueta'>Category:</label>
                    <select id='category' name="category" {...register('category')} defaultValue="">
                        <option value="" disabled>Type of action</option>
                        <option value="for_sale">For sale</option>
                        <option value="rent">Rent</option>
                        <option value="vacational_rent">Vacational rent</option>
                    </select><br/>
                </div>
                <div className="location_box">
                    <label htmlFor='location' className="etiqueta">Location:</label>
                    <input type="text" className="location" id='location' name='location' placeholder='Barcelona' {...register("location")}/><br/>
                </div>
                <div className="price_box">
                    <label htmlFor='price' className="etiqueta">Price:</label>
                    <div className="price_inputs">
                        <div className="min_price_box">
                            <label htmlFor='min_price' className="min_price_label">Min:</label>
                            <input type="number" className="min_price" id='min_price' name='min_price' {...register("min_price")}/>
                        </div>
                        <div className="max_price_box">
                            <label htmlFor='max_price' className="max_price_label">Max:</label>
                            <input type="number" className="max_price" id='max_price' name='max_price' {...register("max_price")}/>
                        </div>
                    </div>
                </div>
                <div className="rooms_box">
                    <label htmlFor='rooms' className="etiqueta">Rooms:</label>
                    <select id='rooms' name="rooms" {...register('rooms')} defaultValue="">
                        <option value="" disabled>Number of rooms</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 or more</option>
                    </select><br/>
                </div>
                <div className="bathrooms_box">
                    <label htmlFor='bathrooms' className="etiqueta">Bathrooms:</label>
                    <select id='bathrooms' name="bathrooms" {...register('bathrooms')} defaultValue="">
                        <option value="" disabled>Number of bathrooms</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 or more</option>
                    </select><br/>
                </div>
                <div className="services_box">
                    <label htmlFor='services' className="etiqueta">Services:</label>
                    <div className='checkbox_box'>
                        <input type="checkbox" className="wifi" id='wifi' name='wifi' {...register("wifi")}/>
                        <label htmlFor='wifi' className="check_label">Wifi</label>
                    </div>
                    <div className='checkbox_box'>
                        <input type="checkbox" className="pool" id='pool' name='pool' {...register("pool")}/>
                        <label htmlFor='pool' className="check_label">Pool</label>
                    </div>
                    <div className='checkbox_box'>
                        <input type="checkbox" className="parking" id='parking' name='parking' {...register("parking")}/>
                        <label htmlFor='parking' className="check_label">Parking</label>
                    </div>
                </div>
                <div className="buttons_box">
                    {/* <input type="submit" className="filter_button" value="Filter"/> */}
                    {/* data-bs-dismiss="modal" */}
                    <button type="submit" className="filter_button">Filter</button>
                    <button type="button" className="delete_button" onClick={() => clear_filters()}>Clear</button>
                </div>
            </form>
        </div>
    );
}