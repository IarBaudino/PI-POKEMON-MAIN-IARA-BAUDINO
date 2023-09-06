import React from 'react';
import { Link } from 'react-router-dom'; // Si estás utilizando React Router
import style from "./Landing.module.css"


const LandingPage = () => {
    return (
        <div className={style.background}>
            <div className={style.tituloUno}>
                <h1 >ATRAPALOS YA!</h1>
            </div>
            <div>
                <Link to="/home">
                    <button className={style.button}>Ingresar</button>
                </Link>

            </div>
        </div>
    );
};

export default LandingPage;