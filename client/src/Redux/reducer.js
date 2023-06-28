import { GET_COUNTRIES, SEARCH_COUNTRY, COUNTRY_DETAIL, ORDER, FILTER, GET_ACTIVITIES, FILTER_ACTV } from "./actionsType";

const initialState = {
  country: [],
  countries: [],
  auxCountries: [],
  countryDetail: [],
  activities: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      if (state.countries[0]) {
        return {
          ...state,
          countries: [...state.countries],
        }
      } else {
        return {
          ...state,
          countries: action.payload,
          auxCountries: action.payload
        }
      }


    case SEARCH_COUNTRY:
      return {
        ...state,
        country: action.payload
      }


    case COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload
      }


    case ORDER:
      const auxCountriesCopy = [...state.countries]

      if (action.payload === "A") {
        return {
          ...state,
          countries: auxCountriesCopy.sort((a, b) => a.poblacion - b.poblacion)
        }
      } else if (action.payload === "D") {
        return {
          ...state,
          countries: auxCountriesCopy.sort((a, b) => b.poblacion - a.poblacion)
        }

      } else if (action.payload === "A - Z") {
        return {
          ...state,
          countries: auxCountriesCopy.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        }
      } else {
        return {
          ...state,
          countries: auxCountriesCopy.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          })
        }
      }


    case FILTER:
      const auxCountriesFill = state.auxCountries.filter(country => country.continente === action.payload)

      if (action.payload === 'Todos') {
        return {
          ...state,
          countries: [...state.auxCountries]
        }
      }
      return {
        ...state,
        countries: auxCountriesFill
      }


    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }


    case FILTER_ACTV:
      if (action.payload === 'Ninguno') {
        return {
          ...state,
          countries: [...state.auxCountries]
        }
      } else {
        let aux2 = []
        let aux1 = state.activities.find(e => e.name === action.payload)
        aux1.Countries.forEach(e => aux2.push(e))

        return {
          ...state,
          countries: aux2
        }
      }


    default:
      return { ...state }
  }
}

export default reducer