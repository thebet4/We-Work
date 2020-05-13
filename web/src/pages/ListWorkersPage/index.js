import React, {useState} from 'react';
import api from '../../services/api';
import {FiCornerDownLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import './style.css';

//Adicionar um "Flat list paras os workers"


export default function Workers(){
    const [city, setCity] = useState('');
    const [workers, setWorkers] = useState([]);


    async function handleLoadWorker(e){
        e.preventDefault();
        const response = await api.post('/workers', {cidade: city.toLowerCase()})
        
        setWorkers(response.data)    
    }

    return(
        <div className="container">
            <div className="header">
                <p className="Title-logo">We Work</p>
                <Link to="/">
                    <FiCornerDownLeft className="backArrow" size={35} color="blue"/>
                </Link>
            </div>

            <div className="inputs-container">
                <form className="city-input" onSubmit={handleLoadWorker}>
                    <input
                        placeholder="find workers in this city" 
                        className="city-input-text"
                        value={city}
                        onChange = {e => setCity(e.target.value)}
                        />
                    <button type="submit" className="btn-submit">Search</button>
                </form>
            </div>

            <div className="list-workers">
                <ul>
                    {workers.map(worker => (
                        <li className="worker-li" key={worker._id}>
                            
                            <p className="li-name">{worker.nome}</p>

                            
                            <p className="li-desc">{worker.desc}</p>

                            
                            <p>{worker.skills}</p>

                            <div className="contact-container">
                                <div className="div-contact">
                                    <strong>EMAIL:</strong>
                                    <p className="li-contact">{worker.email}</p>
                                </div>

                                <div className="div-contact">
                                    <strong>WHATSAPP:</strong>
                                    <p className="li-contact">{worker.whatsapp}</p>
                                </div>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
