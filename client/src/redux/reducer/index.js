import {GET_ALL_COUNTRIES, GET_COUNTRY, FILTER_COUNTRIES, CREATE_ACTIVITY, ORDER_COUNTRY, FILTER_ACTIVITY, FILTER_CONTINENT, FOUND_ACTIVITIES, CLEAR_COUNTRY} from '../actions'

const initialState = {
    countries: [],
    countriesLoaded: [],
    country: [],
    activity: []
  };

  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesLoaded: action.payload
            }
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case FILTER_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case ORDER_COUNTRY:
                let countriesSort
                if(action.payload === 'ZtoA'){
                    countriesSort = state.countries.sort((a, b) => {
                        if(a.name > b.name) return -1
                        if(a.name < b.name) return 1
                        else return 0
                    })
                }
                if(action.payload === 'AtoZ'){
                    countriesSort = state.countries.sort((a, b) => {
                        if(a.name > b.name) return 1
                        if(a.name < b.name) return -1
                        else return 0
                    })
                }
                if(action.payload === 'PopLow'){
                    countriesSort = state.countries.sort((a, b) => {
                        return a.population - b.population
                    })
                }
                if(action.payload === 'PopHigh'){
                    countriesSort = state.countries.sort((a, b) => {
                        return b.population - a.population
                    })
                }
                return {
                    ...state,
                    countries: countriesSort
                }
        case FILTER_CONTINENT:
            let countriesList2 = state.countriesLoaded
            let filterContinent = countriesList2.filter(c => c.continent === action.payload)
            return {
                ...state,
                countries: filterContinent
            }

        case CREATE_ACTIVITY:
            return {
                ...state
            }
        case FOUND_ACTIVITIES:
            return {
                ...state,
                activity: action.payload
            }
        case FILTER_ACTIVITY:
            let activitiesCountries = state.countries
            let filterActivity = action.payload === ''
            ? activitiesCountries.filter(a => a.activity.length > 0)
            : activitiesCountries.filter(a => a.activities && a.activities.map(f => f.name).includes(action.payload))
            return {
                ...state,
                countries: filterActivity
            }
        case CLEAR_COUNTRY:
            return {
                ...state,
                country: []
            }
        default:
            return {...state}        
        }
}