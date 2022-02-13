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
            <h1 className="nfTitle">Oops...Country Not Found :(</h1>
            <p className="nfDesc"><strong>Click on "Clean Search" or type another Country</strong></p>
        </div>
    )
    
}

export default NotFound