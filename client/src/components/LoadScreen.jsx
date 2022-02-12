import React from "react";
import loading from "../images/loading.gif"
import "./CSS/landing.css"

const LoadScreen = () => {
    return(
        <div className="loading">
            <h1 className="loadtext">Loading...</h1>
            <img className="loadimg" src={ loading } alt="loading"/>
        </div>
    )
}

export default LoadScreen