import { BASE_URL } from '../helpers/constants';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

export const resetError = () => {
    return dispatch => dispatch({
        type: RESET_ERROR
    });
};

export const auth = (user) => {
    return async dispatch => {
        const response = await fetch(`${BASE_URL}/staff/auth/auth`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });

        const result = await response.json();

        if (!result.result) {
            dispatch({
                type: USER_ERROR,
                payload: result.error
            });
        } else {
            dispatch({
                type: USER_SUCCESS,
                payload: result.result
            });
        }
    }
}