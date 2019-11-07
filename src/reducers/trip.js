import { SET_TRIPS_LIST, SET_TRIP_CURRENT } from '../actions/trip';

const initialState = {
    count: 0,
    list: [],
    current: {}
};

export function trip (state = initialState, action) {
    switch (action.type) {
        case SET_TRIPS_LIST:
                return {
                    ...state,
                    list: action.payload.items,
                    count: action.payload.count
                };
        case SET_TRIP_CURRENT:
                console.log(action);
                return {
                    ...state,
                    current: { ...state.current, ...action.payload }
                }
        default: return { ...state };
    }
}