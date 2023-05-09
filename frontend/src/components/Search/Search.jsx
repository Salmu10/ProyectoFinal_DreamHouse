import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Search.scss';
import { FaSearch } from "react-icons/fa";

export default function Search({ apply_filters}) {

    const {register, handleSubmit, setValue, formState: {errors} } = useForm();

    const filters = { page: 1, limit: 6 };

    const filter = data => {
        if (data.category != '') {
            filters.category = data.category;
        }
        if (data.location != '') {
            filters.location = data.location;
        }
        apply_filters(filters);
    };

    useEffect(() => {
        setValue('category', filters.category);
        setValue('location', filters.location);
    }, [filters]);

    return (
        <div className="search">
            <form className="search_form" id="search_form" onSubmit={handleSubmit(filter)}>
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
                    <label htmlFor='location' className='etiqueta'>Location:</label>
                    <input type="text" className="location" id='location' name='location' placeholder='Barcelona' {...register("location")}/>
                </div>
                    <button type="submit" className="search_button">Search<FaSearch className='icon'/></button>
            </form>
        </div>
    );
}