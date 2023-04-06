import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Search({ apply_filters}) {

    const {register, handleSubmit, setValue, formState: {errors} } = useForm();

    const filters = { page: 1, limit: 6 };

    const filter = data => {
        if (data.category != '') {
            filters.category = data.category;
        }
        apply_filters(filters);
    };

    useEffect(() => {
        setValue('category', filters.category);
    }, [filters]);

    return (
        <div className="search">
            FILTERS
            <form className="forms_form" id="login_form" onSubmit={handleSubmit(filter)}>
                <div className="category_box">
                    <label htmlFor='category' className='etiqueta'>Category:</label>
                    <select id='category' name="category" {...register('category')} defaultValue="">
                        <option value="" disabled>Select the type of action</option>
                        <option value="for_sale">For sale</option>
                        <option value="rent">Rent</option>
                        <option value="vacational_rent">Vacational rent</option>
                    </select><br/>
                </div>
                <div className="location_box">
                    <label htmlFor='location' className='etiqueta'>Location:</label>

                </div>
                <div className="buttons_box">
                    <input type="submit" className="filter_button" value="Filter"/>
                    {/* <button type="button" className="delete_button" onClick={() => clear_filters()}>Clear</button> */}
                </div>
            </form>
        </div>
    );
}