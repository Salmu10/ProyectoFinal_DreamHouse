import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Filters({ apply_filters, delete_filters, filters, mapShow}) {

    const {register, handleSubmit, setValue, formState: {errors} } = useForm();

    const clear_filters = () => {
        setValue("category", '');
        setValue("rooms", '');
        setValue("bathrooms", '');
        setValue("wifi", '');
        setValue("pool", '');
        setValue("parking", '');
        filters = { page: 1, limit: 6 };
        if (mapShow == true) {
            filters.map = true;
        }
        delete_filters(filters);
    }

    const filter = data => {
        filters = { page: 1, limit: 6 };
        if (data.category != '') {
            filters.category = data.category;
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
        setValue('rooms', filters.rooms);
        setValue('bathrooms', filters.bathrooms);
        setValue('wifi', filters.wifi);
        setValue('pool', filters.pool);
        setValue('parking', filters.parking);
    }, [filters]);

    return (
        <div className="filters">
            FILTERS
            <form className="forms_form" id="login_form" onSubmit={handleSubmit(filter)}>
                <div className="rooms_box">
                    <label htmlFor='category' className='etiqueta'>Category:</label>
                    <select id='category' name="category" {...register('category')} defaultValue="">
                        <option value="" disabled>Select the type of action</option>
                        <option value="for_sale">For sale</option>
                        <option value="rent">Rent</option>
                        <option value="vacational_rent">Vacational rent</option>
                    </select><br/>
                </div>
                <div className="rooms_box">
                    <label htmlFor='rooms' className="etiqueta">Rooms:</label>
                    <select id='rooms' name="rooms" {...register('rooms')} defaultValue="">
                        <option value="" disabled>Select the number of rooms</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 or more</option>
                    </select><br/>
                    {/* <input type="number" min="0" className="rooms" {...register("rooms")} defaultValue={''}/> */}
                </div>
                <div className="bathrooms_box">
                    <label htmlFor='bathrooms' className="etiqueta">Bathrooms:</label>
                    <select id='bathrooms' name="bathrooms" {...register('bathrooms')} defaultValue="">
                        <option value="" disabled>Select the number of bathrooms</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 or more</option>
                    </select><br/>
                    {/* <input type="number" min="0" className="bathrooms" {...register("bathrooms")} defaultValue={''}/> */}
                </div>
                <div className="services_box">
                    <label htmlFor='services' className="etiqueta">Services:</label>
                    <input type="checkbox" className="wifi" {...register("wifi")}/>Wifi
                    <input type="checkbox" className="pool" {...register("pool")}/>Pool
                    <input type="checkbox" className="parking" {...register("parking")}/>Parking
                </div>
                <div className="buttons_box">
                    <input type="submit" className="filter_button" value="Filter"/>
                    <button type="button" className="delete_button" onClick={() => clear_filters()}>Clear</button>
                </div>
            </form>
        </div>
    );
}