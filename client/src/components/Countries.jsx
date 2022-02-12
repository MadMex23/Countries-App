import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, filterContinent, orderCountry, filterActivity } from '../redux/actions'
import NavBar from './NavBar'
import LoadScreen from './LoadScreen'
import Numbers from './Numbers'
import CountriesCards from './CountriesCards'
import './CSS/Countries.css'
import NotFound from './NotFound'

const AllCountries = () => {

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)
    const [loadScreen, setLoadScreen] = React.useState(true)
    const [, setOrder] = React.useState('')
    const [current, setCurrent] = React.useState(1)
    // const [quantity, setQuantity] = React.useState(0)
    // const [pageNumber, setPageNumber] = React.useState(1)
    var quantity = 0
    if(current !== 1) { quantity = 10 }
    else if (current === 1) { quantity = 9}
    const indexLast = current * quantity
    const indexFirst = indexLast - quantity
    const actualCountries = countries.slice(indexFirst, indexLast)
    const paged = p => setCurrent(p)

    // React.useEffect(() => {
    //     if(current !== 1) {
    //         setQuantity(10)
    //     }
    //     else if (current === 1) {
    //         setQuantity(9)
    //     }
    // }, [current])

    // const handleNextPage = () => {
    //     if(countries.length > current + quantity) {
    //         setCurrent(current + quantity)
    //     }
    //     if(countries.length > 1) {
    //         setPageNumber(pageNumber + 1)
    //     }   
    // }

    // const handlePrevPage = () => {
    //     if(current > 0) {
    //         setCurrent(current - quantity)
    //         setPageNumber(pageNumber - 1)
    //     }
    //     if(current === 0) {
    //         setCurrent(current)
    //         setPageNumber(pageNumber)
    //     }
    // }

    React.useEffect(() => {
            dispatch(getAllCountries())
            .then(() => setLoadScreen(false))   
    }, [])

    const handlerOrder = o => {
        o.preventDefault()
        if (o.target.value !== '') {
            dispatch(orderCountry(o.target.value))
            setCurrent(1)
            setOrder(o.target.value)
        }
        else {
            dispatch(getAllCountries())
        }
    }

    const handlerContinent = c => {
        c.preventDefault()
        if (c.target.value === '') {
            dispatch(getAllCountries())
        }
        else {
            dispatch(filterContinent(c.target.value))
            setCurrent(1)
        }
    }

    const handlerActivity = a => {
        a.preventDefault()
        if(a.target.value === '') {
            dispatch(getAllCountries())
        }
        else {
            dispatch(filterActivity(a.target.value))
            setCurrent(1)
        }
    }

    if (loadScreen) return (<LoadScreen/>)
    return(
        <div className='background'>
            <NavBar
            handlerOrder = {handlerOrder}
            handlerContinent = {handlerContinent}
            handlerActivity = {handlerActivity}
            />
                {actualCountries.length && !loadScreen ?
                    <div className='homebody'>
                    <CountriesCards countries = {actualCountries}/>
                    <Numbers countries={countries} paged={paged}/>
                    </div>
                : <NotFound/>}
                {/* {countries.length && <div className='paged'>
                    <button onClick={handlePrevPage}>Previous</button>
                    <button onClick={handleNextPage}>Next</button>
                    </div>
                    } */}
        </div>
    )
}

export default AllCountries