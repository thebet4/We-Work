import React, {useState} from 'react';
import './style.css';
import {FiCornerDownLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';


export default function Register(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [desc, setDesc] = useState('');
    const [skills, setSkills] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        

        try{
            await api.put('/register', {
                nome: name,
                email: email,
                senha: password,
                cidade: city.toLowerCase(),
                desc: desc,
                skills: skills,
                whatsapp: whatsapp
            })   
            
            history.push('/login')
        }catch(err){
            alert('Error registering new freelancer')
        }

    }


    return(
        <div className="register-container">
            <div className="header">
                <h1 className="Title-logo">Welcome to WeWork</h1>
                <Link to="/">
                    <FiCornerDownLeft className="backArrow" size={35} color="blue"/>
                </Link>
            </div>

            <div className="register-form">
                <form className="register-inputs" onSubmit={handleRegister}>
                    <input 
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    required 
                    />

                    <input 
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    required
                    />
                    
                    <input 
                    placeholder="Password"
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    required
                    />
                    
                    <input 
                    placeholder="City"
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)} 
                    required
                    />

                    <input 
                    placeholder="Whatsapp"
                    type="text"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)} 
                    required
                    />

                    <input 
                    placeholder="A little description about you"
                    type="text"
                    value={desc}
                    onChange={e => setDesc(e.target.value)} 
                    required
                    />

                    <input 
                    placeholder="A short description of your skills"
                    type="text"
                    value={skills}
                    onChange={e => setSkills(e.target.value)} 
                    required
                    />

                    <button className="form-button" type="submit" >Register</button>
                    
                </form>
            </div>
        </div>
    )
}