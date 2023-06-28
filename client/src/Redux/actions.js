import { GET_COUNTRIES, SEARCH_COUNTRY, COUNTRY_DETAIL, ORDER, FILTER, GET_ACTIVITIES, FILTER_ACTV } from "./actionsType";
import axios from 'axios'

export const getCountries = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get('http://localhost:3001/countries')
      return dispatch({
        type: GET_COUNTRIES,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const searchCountry = (name) => {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/countries?name=${name}`)
      return dispatch({
        type: SEARCH_COUNTRY,
        payload: response.data
      })
    } catch (error) {
      alert(error.response.data);
    }
  }
}

export const countryDetail = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/countries/${id}`)
      return dispatch({
        type: COUNTRY_DETAIL,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const orderCards = (order) => {
  return { type: ORDER, payload: order }
};

export const filterCards = (filter) => {
  return { type: FILTER, payload: filter }
}

export const getActivities = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get('http://localhost:3001/activities')
      return dispatch({
        type: GET_ACTIVITIES,
        payload: response.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const actvFiler = (filter) => {
  return { type: FILTER_ACTV, payload: filter }
}
