import React, {useState} from "react";
import api from '../../services/api';
import {FiCornerDownLeft} from 'react-icons/fi';
import './style.css'

export default function UpdateProfile(){
    const id = localStorage.getItem('workerID')
    const [city, setCity] = useState('')
    const [desc, setDesc] = useState('')
    const [skills, setSkills] = useState("")
    const [whatsapp, setWhatssap] = useState()


    window.onload = loadDevDatas


    async function loadDevDatas(){
        const response = await api.post("/profile", {id: id})
        setCity(response.data.cidade)
        setDesc(response.data.desc)
        setSkills(response.data.skills)
        setWhatssap(response.data.whatsapp)
    }

    async function handleUpdateWorker(){
        await api.put('/update', {
            id: id,
            cidade: city,
            desc: desc,
            skills: skills,
            whatsapp: whatsapp
        })

    }

    return(
        <div className="update-profile">
            <div className="header">
                <h1 className="Title-logo">We Work</h1>
                <a href="http://localhost:3000/profile">
                    <FiCornerDownLeft className="backArrow" size={35} color="blue"/>
                </a>
            </div>

            <form className="worker-datas" onSubmit={handleUpdateWorker}>
                <input 
                    className= "input-data" 
                    placeholder={city}
                    onChange={e => setCity(e.target.value)} 
                    
                />

                <input 
                    className= "input-data" 
                    placeholder={desc}
                    onChange={e => setDesc(e.target.value)} 
                />

                <input 
                    className= "input-data" 
                    placeholder={skills}
                    onChange={e => setSkills(e.target.value)} 
                />

                <input 
                    className= "input-data-n" 
                    type="number" 
                    placeholder={whatsapp}
                    onChange={e => setWhatssap(e.target.value)} 
                />

                <button className="submit-button" type="submit">Save</button>
            </form>
        </div>
    )
}