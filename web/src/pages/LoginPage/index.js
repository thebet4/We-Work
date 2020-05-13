import React, {useState} from 'react';
import './style.css';
import api from '../../services/api'
import {FiCornerDownLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/login',{
                email: email,
                senha: password  
              });
            

            localStorage.setItem('workerID', response.data);
            window.location.href ="http://localhost:3000/profile"

        }catch(err){
            alert('Opssss somethings wrongs')
        }

    }



    return(
        <div className="container">
            <div className="header">
                <p className="Title-logo">Welcome to We Work!</p>
                <Link to="/">
                    <FiCornerDownLeft className="backArrow" size={35} color="blue"/>
                </Link>
            </div>

            <div className="worker-input">
                <form className="input-form" onSubmit={handleLogin}>

                    <input 
                        type="text" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required 
                    />

                    <input 
                        type="text" 
                        placeholder="Password" 
                        value = {password} 
                        onChange={e => setPassword(e.target.value)}
                        required 
                    />

                    <button className="Login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}