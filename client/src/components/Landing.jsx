import React from "react";
import { NavLink } from 'react-router-dom'
import './CSS/landing.css'
import image from "../images/globe-joypixels.gif"

const Landing = () => {
    return(
        <div className= 'land'>
            <h1 className="landtext1">Countries App</h1>
            <NavLink to='/countries'>
                <img className='earthImage' src={image} alt='earth'/>
            </NavLink>
            <h1 className="landtext2">Welcome to the gates of the world...enter and explore the inside of every country in the globe!</h1>
        </div>
    )
}

export default Landing