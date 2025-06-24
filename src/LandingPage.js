import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './landingPage.css'

function LandingPage(){

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/LoginPage');
    }

    return<>

        <div className='header'>
            <h1>
                header
            </h1>
        </div>

        <div className='container'>
            <h1 className='title'>Hello</h1>
            <button type='button' onClick={goToLogin} className='registerButtons'>Log in</button>
            <button type='button' className='registerButtons'>Sign Up</button>
        </div>
        
    </>
}

export default LandingPage;