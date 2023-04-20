import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import 'react-day-picker/dist/style.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useReserve } from "../../../hooks/useReserve";

export default function ContactModal({ house }) {

    const navigate = useNavigate();
    const { user, isAuth } = useContext(AuthContext);
    const { sendEmail } = useReserve();

    const validators = Yup.object().shape({
        subject: Yup.string().required('*Subject is required').min(3, '*Subject must be at least 3 characters').max(25, '*Subject must be at most 25 characters'),
        desc: Yup.string().required('*Description is required').min(3, '*Description must be at least 3 characters').max(300, '*Description must be at most 300 characters'),
    });

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ resolver: yupResolver(validators) });

    useEffect(function () {

    }, [])

    const onSubmit = data => {
        console.log(data);
        if (!isAuth) {
            navigate('/login');
        } else {
            console.log(house.user_id);
            data.house_owner = house.user_id;
            data.user = user.email;
            console.log(user.email);
            sendEmail(data);
        }
    }

    const cancel = () => {
        setValue('subject', '');
        setValue('desc', '');
    }

    return (
        <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title text-uppercase fw-bold" id="staticBackdropLabel">Contact with house owner</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <form className='contactform' onSubmit={handleSubmit(onSubmit)}>
                                <div className='attribute_box'>
                                    <label htmlFor="subject" className='etiqueta'>Subject:</label>
                                    <input type="text" id="subject" {...register('subject')} placeholder="Write the subject there"/>
                                </div>
                                <span className="error">{errors.subject?.message}</span>
                                <div className='attribute_box'>
                                    <label htmlFor="desc" className='etiqueta'>Description:</label>
                                    <textarea type="text" rows={3} id="desc" {...register('desc')} placeholder="Write to the owner there"/>
                                </div>
                                <span className="error">{errors.desc?.message}</span>
                                <div className="actions_box">
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Send</button>
                                    <button type="button" className="cancel_button" data-bs-dismiss="modal" aria-label="Close" onClick={() => cancel()}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}