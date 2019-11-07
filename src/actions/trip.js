import { BASE_URL, TRIP_LIMIT_PAGE } from '../helpers/constants';
import { objectToQueryParams } from '../helpers/query';

export const SET_TRIPS_LIST = 'SET_TRIPS_LIST';
export const SET_TRIP_CURRENT = 'SET_TRIP_CURRENT';


export const getTrips = (options) => {
    return async dispatch => {

        const opt = {
            ...options,
            limit: TRIP_LIMIT_PAGE
        };
        
        const accessToken = window.localStorage.getItem('accessToken');

        const response = await fetch(`${BASE_URL}/trips?${ objectToQueryParams(opt) }`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const { result } = await response.json();

        dispatch({
            type: SET_TRIPS_LIST,
            payload: result
        });
    }
}

export const getTripById = (id) => {
    return async dispatch => {
        const accessToken = window.localStorage.getItem('accessToken');

        const response = await fetch(`${BASE_URL}/trips/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const { result } = await response.json();

        dispatch({
            type: SET_TRIP_CURRENT,
            payload: result
        });
    }
}