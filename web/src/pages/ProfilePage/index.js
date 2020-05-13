import React,{useState} from 'react';
import './style.css';
import api from '../../services/api';
import {FiEdit, FiLogOut} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';





export default function Profile(){
    const [dev, setDev] = useState({})
    const history = useHistory();
    window.onload = handleloadworker

    function backHome(){
        localStorage.clear();
        history.push('/')
    }

    async function handleloadworker(){

        const id = localStorage.getItem('workerID')
    
        const response = await api.post('/profile', {id: id})
        setDev(response.data)
        
    }

    return(
        <div className="profile-container">
            <div className="header">
            <h1 className="Title-logo">Welcome again</h1>
            <a href="http://localhost:3000/update">
                <button className="btn-edit"><FiEdit size="30" color="blue"/></button>
            </a>
                <button className="btn-logout" onClick={backHome}><FiLogOut size="30" color="blue"/></button>
            </div>

            <div className="info-container">
                <p className="info">Name: {dev.nome}</p>
                <p className="info">Email: {dev.email}</p>
                <p className="info">City: {dev.cidade}</p>
                <p className="info">Describe: {dev.desc}</p>
                <p className="info">Skills: {dev.skills}</p>
            </div>
            

        </div>
    )
}