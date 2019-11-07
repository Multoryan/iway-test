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
            // В localStorage эту информацию хранить не следует!!!
            window.localStorage.setItem('isAuth', 1);
            window.localStorage.setItem('accessToken', action.payload.token);
            window.localStorage.setItem('refreshToken', action.payload.refresh_token);
            return {
                ...state,
                isAuth: true,
                accessToken: action.payload.token,
                refreshToken: action.payload.refresh_token,
                error: null
            };
        case USER_ERROR:
            window.localStorage.setItem('isAuth', 0);
            window.localStorage.setItem('accessToken', '');
            window.localStorage.setItem('refreshToken', '');
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