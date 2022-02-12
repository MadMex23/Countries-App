import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getCountry, clearCountry } from '../redux/actions'
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom'
import LoadScreen from "./LoadScreen";
import './CSS/Detail.css'

const CountryDetail = () => {
    let {id} = useParams()
    const countryDetail = useSelector(state => state.country)
    const dispatch = useDispatch()
    const [loadScreen, setLoadScreen] = React.useState(true)

    React.useEffect(() => {
            dispatch(getCountry(id))
            setLoadScreen(false)
    }, [])

    const handleClick= () => {
        dispatch(clearCountry())
    }

    let activitiesMap = countryDetail.activities?.map(a => {
        return(
        <div className='eachAct' key= {a.id}>
            <p><strong>{a.name}</strong></p>
            <p>Difficulty: {a.difficulty}</p>
            <p>Duration: {a.duration}</p>
            <p>Season: {a.season}</p>
        </div>
        )
    })

    if (loadScreen) return (<LoadScreen/>)
    return(
        <section className="back">
        <div className="all">
            <div className="top">
                <NavLink to= '/countries'>
                    <button onClick={handleClick}>Back Home</button>
                </NavLink>
                <NavLink to= '/activity'>
                    <button onClick={handleClick}>Add Activity</button>
                </NavLink>
            </div>
            <div className="content">
                <div className="divflag">
                    <h1 className="counName">{countryDetail.name}</h1>
                    <img src= {countryDetail.flag} alt='' className="detflag"/>
                </div>
                <div className="info">
                    <div className="titleinfo">
                        <h3>Information</h3>
                    </div>
                    <div className="contenido">
                            <h4>Code: {countryDetail.id}</h4>               
                            <h4>Capital: {countryDetail.capital}</h4>         
                            <h4>Continent: {countryDetail.continent}</h4>
                            <h4>Subregion: {countryDetail.subregion}</h4>
                            <h4>Area: {countryDetail.area} Km²</h4>
                            <h4>Population: {countryDetail.population}</h4>
                    </div>
                    <div className='activities'>
                        <h3>Activities</h3>
                        {activitiesMap}
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default CountryDetail