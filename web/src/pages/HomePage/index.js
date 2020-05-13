import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

export default function(){



    return(
        <div className="container">

            <div className="header">
                <h1 className="Title-logo">We Work</h1>
                <div className="btns">
                    <Link to="/login">
                        <button className="btn-Login">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn-Register">Register</button>
                    </Link>
                </div>
            </div>
            <div className="workers">
                <p className="body-text">Welcome to the best freelancer platform!</p>
                <Link to="/workers">
                    <button className="search-worker">find someone to solve your problems</button>
                </Link>

            </div>
            
        </div>
    )
}