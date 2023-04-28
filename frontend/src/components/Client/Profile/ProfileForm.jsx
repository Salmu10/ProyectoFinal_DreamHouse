import './ProfileForm.scss';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ReservesList from './ReservesList';
import { useReserve } from "../../../hooks/useReserve";
import { useHouses } from "../../../hooks/useHouses";
import HousesList from "../../Client/Houses/HousesList";
import { useNavigate } from "react-router-dom";

export default function ProfileForm({user, profile, sendData, errorMSG}) {

    const navigate = useNavigate();
    const [edit, setEdit] = useState(true);
    const { userReserves, getUserReserves } = useReserve();
    const { userHouses, getUserHouses } = useHouses();

    const validators = Yup.object().shape({
        username: Yup.string().required('*Username is required').min(3, '*Username must be between 3 and 15 characters').max(15, '*Username must be between 3 and 15 characters'),
        email: Yup.string().email('*Email format invalid').required('*Email is required'),
        name: Yup.string(),
        surnames: Yup.string(),
        image: Yup.string().url('*Must be an url'),
        biography: Yup.string(),
    });

    const {register, handleSubmit, setValue, formState: {errors} } = useForm({resolver: yupResolver(validators)});

    useEffect(() => {
        if (user.id !== '') {
            setValue('username', user.username);
            setValue('email', user.email);
        }
        if (profile.id !== '') {
            setValue('name', profile.name);
            setValue('surnames', profile.surnames);
            setValue('image', profile.image);
            setValue('biography', profile.biography);
        }
        getUserReserves(user.id);
        getUserHouses(user.id);
    }, [user, profile]);

    const send_data = data => {
        sendData(data);
    };

    const redirects = {
        add_house: () => navigate('/profile/houses/add'),
    }

    const reservess_html = userReserves.length > 0 ? userReserves.map(reserve => <ReservesList reserve={reserve} key={reserve.id}/>) : <p>No Reserves</p>;

    return (
        <div className='profile_page'>
            <form onSubmit={handleSubmit(send_data)}>
                <div className="profile">
                    <div className='profile_image'>
                        <img className='user_image' src={profile.image} alt=''/>
                        <input type="text" id="image" {...register('image')} disabled={edit}/>
                        <span className="error">{errors.image?.message}</span>
                    </div>
                    <div className='profile_user'>
                        <div className='attribute_box'>
                            <label htmlFor="username" className='etiqueta'>Username:</label>
                            <input type="text" id="username" {...register('username')} disabled={edit}/><br/>
                            <span className="error">{errors.username?.message}</span>
                        </div>
                        <div className='attribute_box'>
                            <label htmlFor="email" className='etiqueta'>Email:</label>
                            <input type="text" id="email" {...register('email')} disabled={edit}/><br/>
                            <span className="error">{errors.email?.message}</span>
                        </div>
                        <div className='attribute_box'>
                            <label htmlFor="name" className='etiqueta'>Name:</label>
                            <input type="text" id="name" {...register('name')} placeholder="Write your name here" disabled={edit}/><br/>
                            <span className="error">{errors.name?.message}</span>
                        </div>
                        <div className='attribute_box'>
                            <label htmlFor="surnames" className='etiqueta'>Surname:</label>
                            <input type="text" id="surnames" {...register('surnames')} placeholder="Write your surnames here" disabled={edit}/><br/>
                            <span className="error">{errors.surname?.message}</span>
                        </div>
                        <div className="error_server">{errorMSG}</div>
                    </div>
                    <div className='profile_bio'>
                        <div className='attribute_box'>
                            <label htmlFor="biography" className='etiqueta'>Biography:</label>
                            <textarea type="text" rows={3} id="biography" {...register('biography')} placeholder="Write something about you here" disabled={edit}/><br/>
                            <span className="error">{errors.biography?.message}</span>
                        </div>
                    </div>
                    <div className='buttons_box'>
                        <button type="button" className="cancel btn btn-danger" onClick={() => setEdit(true)} hidden={edit}>Cancel</button>
                        <button type="button" className="edit btn btn-primary" onClick={() => setEdit(false)}>Edit profile</button>
                        <button type="submit" className="confirm btn btn-success" hidden={edit}>Confirm</button>
                    </div>
                </div>
            </form>
            {reservess_html}
            <div className='houses'>
                <div className="title">
                    <h3>My houses</h3>
                </div>
                <button type="button" className="add_house btn btn-primary" onClick={() => redirects.add_house()}>Add your house</button>
                <HousesList houses={userHouses}/>
            </div>
        </div>
    )
}