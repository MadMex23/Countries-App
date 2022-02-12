import React from "react";
import { NavLink } from 'react-router-dom'
import "./CSS/Countries.css"

const CountryCard = ({id, name, flag, continent}) => {
    return(
        <div>
        <NavLink className="eachCard" to= {`/countries/${id}`}>
            <img className="flags" src= {flag} alt= ''/>
            <h4 className="countryName">{name}</h4>
            <h5 className="continent">{continent}</h5>
        </NavLink>
        </div>
    )
}

export default CountryCard