import React from "react";
import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="page_logo_box">
                    <img src="/assets/Logo_2.png" alt="logo"/>
                </div>
                <div className="text_box">
                    <p>Dreamhouse project by Salva Muñoz</p>
                </div>
                <div className="logo_box">
                    <img src="/assets/logo_salmu_blanco.png" alt="logo"/>
                </div>        
            </div>
        </footer>
    )
}