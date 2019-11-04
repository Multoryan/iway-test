import { USER_SUCCESS, USER_ERROR, RESET_ERROR } from '../actions/user';

const initialState = {
    isAuth: false,
    accessToken: null,
    refreshToken: null,
    error: null,
};

export function user (state = initialState, action) {
    switch (action.type) {
        case USER_SUCCESS: 
            window.localStorage.setItem('isAuth', true);
            return {
                ...state,
                isAuth: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                error: null
            };
        case USER_ERROR:
            window.localStorage.setItem('isAuth', false)
            return {
                ...state,
                isAuth: false,
                accessToken: null,
                refreshToken: null,
                error: action.payload.message
            };
        case RESET_ERROR:
            return { ...state, error: null };
        default: return state
    }
};