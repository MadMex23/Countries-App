import React from "react";
import { useDispatch } from "react-redux"
import { getAllCountries } from "../redux/actions";
import "./CSS/Countries.css"

const NotFound = () => {

    const dispatch = useDispatch()

    const handleClear = () => {
        dispatch(getAllCountries())
    }

    return(
        <div className="notFound">
            <h1>Country Not Found</h1>
            <button className="btn" onClick={handleClear}>Reload</button>
        </div>
    )
    
}

export default NotFound