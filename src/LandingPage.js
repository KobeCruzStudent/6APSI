import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './landingPage.css'

function LandingPage(){

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/LoginPage');
    }

    return<>

    <nav className='navBar'>
        <div className='navBar-brand'>
            Dream Travel
        </div>
        <div className="searchBar">
            <input type="text" placeholder="Search..." />
        </div>
    </nav>

    <div className='pageContent'>
        <div className='mainContent'>
            <div className='textContainer'>
                <h1 className='textHeader'>
                    Travel the<br></br>World!
                </h1>

            </div>
            <div className='buttonContainer'>
                <button type='button' onClick={goToLogin} className='registerButtons'>Log in</button>
                <button type='button' className='registerButtons'>Sign Up</button>
            </div>
        </div>
    </div>

        

        
        
    </>
}

export default LandingPage;