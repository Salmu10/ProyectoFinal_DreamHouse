import './HousesForm.scss';
import React, { useEffect, useState } from "react";

import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function HousesForm({house= {id: '', country: '', location: '', image: '', price: '', address: '', latitude: '', longitude: '', category: ''}, 
houseServices= {id: '', rooms: '', bathrooms: '', pool: '', wifi: '', parking: '', house_id: ''}, houseImages, form_type, sendData}) {
    const navigate = useNavigate();
    const [mainImage, setMainImage] = useState([]);
    const [images, setImages] = useState([]);

    const validators = Yup.object().shape({
        country: Yup.string().required('*Country is required').min(3).max(50),
        location: Yup.string().required('*Location is required').min(3).max(50),
        // image: Yup.string().required('*Image is required').min(3).max(100),
        address: Yup.string().required('*Address is required').min(3).max(50),
        price: Yup.number().required('*Slots number must be between 5 and 20').min(0).max(2000000000),
        latitude: Yup.number().required('*Latitude is required').min(-180).max(180),
        longitude: Yup.number().required('*Longitude is required').min(-180).max(180),
        category: Yup.string().required('*Category is required'),
        rooms: Yup.number().required('*Rooms is required').min(1).max(20),
        bathrooms: Yup.number().required('*Bathooms is required').min(0).max(20),
        pool: Yup.boolean(),
        wifi: Yup.boolean(),
        parking: Yup.boolean()
    });

    const {register, handleSubmit, setValue, formState: {errors} } = useForm({resolver: yupResolver(validators)});
    
    useEffect(() => {
        if (house.id !== '') {
            setValue('country', house.country);
            setValue('location', house.location);
            // setValue('image', house.image);
            setValue('address', house.address);
            setValue('price', house.price);
            setValue('latitude', house.latitude);
            setValue('longitude', house.longitude);
            if (house.category == 1) {
                setValue('category', 'for_sale');
            } else if (house.category == 2) {
                setValue('category', 'rent');
            } else if (house.category == 3) {
                setValue('category', 'vacational_rent');
            }
        }
        if (houseServices.id !== '') {
            setValue('rooms', houseServices.rooms);
            setValue('bathrooms', houseServices.bathrooms);
            setValue('pool', houseServices.pool);
            setValue('wifi', houseServices.wifi);
            setValue('parking', houseServices.parking);
        }
    }, [house, houseServices]);

    const sendMainImage = e => {
        setMainImage(e);
    };

    const sendImages = e => {
        setImages(e);
    };
    
    const send_data = data => {
        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            formData.append('imagenes', images[i]);
        }
        if (mainImage != '') {
            formData.append('main_image', mainImage[0]);
        }
        formData.append('price', data.price);
        formData.append('country', data.country);
        formData.append('location', data.location);
        formData.append('address', data.address);
        formData.append('latitude', data.latitude);
        formData.append('longitude', data.longitude);
        formData.append('category', data.category);
        formData.append('rooms', data.rooms);
        formData.append('bathrooms', data.bathrooms);
        formData.append('pool', data.pool);
        formData.append('wifi', data.wifi);
        formData.append('parking', data.parking);
        sendData(formData);
    };

    const redirects = {
        houses: () => navigate('/dashboard/houses')
    };

    const button_type = form_type == 'create' ? 'Create' : 'Update';
    const read_only = form_type == 'update' ? true : false;

    // console.log(houseImages);

    return (
        <form className='house_form' onSubmit={handleSubmit(send_data)}>
            <div className="house_box">
                <div className="house_attr">
                    <div className='country_box'>
                        <label htmlFor="country" className='etiqueta'>Country:</label>
                        <input type="text" id="country" {...register('country')}/><br/>
                        <span className="error">{errors.country?.message}</span>
                    </div>
                    <div className='location_box'>
                        <label htmlFor="location" className='etiqueta'>Location:</label>
                        <input type="text" id="location" {...register('location')}/><br/>
                        <span className="error">{errors.location?.message}</span>
                    </div>
                    <div className='image_box'>
                        <label htmlFor='image' className='etiqueta'>Image:</label>
                        <input id='image' name="image" type="file" {...register('image')} onChange={(e) => sendMainImage(e.target.files)}/><br/>
                        <span className="error">{errors.image?.message}</span>
                    </div>
                    <div className='price_box'>
                        <label htmlFor="price" className='etiqueta'>Price:</label>
                        <input type="number" id="price" {...register('price')}/><br/>
                        <span className="error">{errors.price?.message}</span>
                    </div>
                    <div className='address_box'>
                        <label htmlFor="address" className='etiqueta'>Address:</label>
                        <input type="text" id="address" {...register('address')}/><br/>
                        <span className="error">{errors.address?.message}</span>
                    </div>
                    <div className='latitude_box'>
                        <label htmlFor='latitude' className='etiqueta'>Latitude:</label>
                        <input id='latitude' name="latitude" type="text" {...register('latitude')}/><br/>
                        <span className="error">{errors.latitude?.message}</span>
                    </div>
                    <div className='longitude_box'>
                        <label htmlFor='longitude' className='etiqueta'>Longitude:</label>
                        <input id='longitude' name="longitude" type="text" {...register('longitude')}/><br/>
                        <span className="error">{errors.longitude?.message}</span>
                    </div>
                    <div className='category_box'>
                        <label htmlFor='category' className='etiqueta'>Category:</label>
                        <select id='category' name="category" {...register('category')} defaultValue="">
                            <option value="" disabled>Select</option>
                            <option value="for_sale">For sale</option>
                            <option value="rent">Rent</option>
                            <option value="vacational_rent">Vacational rent</option>
                        </select><br/>
                        <span className="error">{errors.category?.message}</span>
                    </div>
                </div>
                <div className="house_services">
                    <div className='rooms_box'>
                        <label htmlFor="rooms" className='etiqueta'>rooms:</label>
                        <input type="number" id="rooms" {...register('rooms')}/><br/>
                        <span className="error">{errors.rooms?.message}</span>
                    </div>
                    <div className='bathrooms_box'>
                        <label htmlFor="bathrooms" className='etiqueta'>bathrooms:</label>
                        <input type="number" id="bathrooms" {...register('bathrooms')}/><br/>
                        <span className="error">{errors.bathrooms?.message}</span>
                    </div>
                    <div className='pool_box'>
                        <label htmlFor="pool" className='etiqueta'>pool:</label>
                        <input type="checkbox" id="pool" {...register('pool')}/><br/>
                        <span className="error">{errors.pool?.message}</span>
                    </div>
                    <div className='wifi_box'>
                        <label htmlFor="wifi" className='etiqueta'>wifi:</label>
                        <input type="checkbox" id="wifi" {...register('wifi')}/><br/>
                        <span className="error">{errors.wifi?.message}</span>
                    </div>
                    <div className='parking_box'>
                        <label htmlFor="parking" className='etiqueta'>parking:</label>
                        <input type="checkbox" id="parking" {...register('parking')}/><br/>
                        <span className="error">{errors.parking?.message}</span>
                    </div>
                </div>
                <div className="house_images">
                    <div className='images_box'>
                        <label htmlFor='images' className='etiqueta'>Image:</label>
                        <input id='images' name="images" type="file" {...register('house_images')} multiple onChange={(e) => sendImages(e.target.files)}/><br/>
                    </div>
                </div>
            </div>
            <div className='buttons_box'>
                <button type="submit" className="btn btn-primary">{button_type}</button>
                <button type="button" className="btn btn-danger" onClick={() => redirects.houses()}>Cancel</button>
            </div>
        </form>
    )
}