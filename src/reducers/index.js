
import { combineReducers } from 'redux';
import { user } from './user';
import { trip } from './trip';

export const rootReducer = combineReducers({
    user, trip
});