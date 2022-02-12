import axios from 'axios'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY = 'GET_COUNTRY'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'
export const FOUND_ACTIVITIES = 'FOUND_ACTIVITIES'
export const ORDER_COUNTRY = 'ORDER_COUNTRY'
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'
export const CLEAR_COUNTRY = 'CLEAR_COUNTRY'

export const getAllCountries = () => {
    return async dispatch => {
        try {
            const r = await axios.get('http://localhost:3001/countries')
            dispatch({type: GET_ALL_COUNTRIES, payload: r.data}) 
        }
        catch (e) {
            console.log('Error in getAllCountries')
            console.log(e)
        }
}
}

export const orderCountry = (order) => {
    return async dispatch => {
        try {
            dispatch({type: ORDER_COUNTRY, payload: order}) 
        }
        catch (e) {
            console.log('Error in orderCountry')
            console.log(e)
        }
}
}

export const getCountry = (id) => {
    return async dispatch => {
        try {
            const r = await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({type: GET_COUNTRY, payload: r.data})
        }
        catch(e) {
            console.log('Error in getCountry')
            console.log(e)
        }
    }
}

export const foundCountries = (name) => {
    return async dispatch => {
        try {
            const r = await axios.get(`http://localhost:3001/country?name=${name}`) 
            dispatch({type: FILTER_COUNTRIES, payload: r.data})
        }
        catch(e) {
            dispatch({type: FILTER_COUNTRIES, payload: []})
            console.log('Error in foundCountries')
            console.log(e)
        }
    }
}

export const filterContinent = (continent) => {
        try {
            return {
                type: FILTER_CONTINENT, 
                payload: continent
            } 
        }
        catch (e) {
            console.log('Error in filterContinent')
            console.log(e)
        }
}

export const filterActivity = (activity) => {
    try {
        return {
            type: FILTER_ACTIVITY, 
            payload: activity
        } 
    }
    catch (e) {
        console.log('Error in filterActivity')
        console.log(e)
    }
}

export const createActivity = (create) => {
    return async dispatch => {
        try {
            const {data} = axios.post('http://localhost:3001/activity', create)
            dispatch({
                type: CREATE_ACTIVITY,
                payload: data
            })
            console.log(data)
        }
        catch(e) {
            console.log('Error in createActivity')
            console.log(e)
        }
    }
}

export const foundActivities = () => {
    return async dispatch => {
        try {
            const r = await axios.get('http://localhost:3001/activity')
            dispatch({type: FOUND_ACTIVITIES, payload: r.data})
        }
        catch(e) {
            console.log('Error in foundActivities')
            console.log(e)
        }
    }
}

export const clearCountry = () => {
    return dispatch => {
        dispatch({type: CLEAR_COUNTRY})
    }
}