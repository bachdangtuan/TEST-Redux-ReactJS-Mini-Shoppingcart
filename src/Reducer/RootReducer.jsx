import {combineReducers} from 'redux';
import {MinicartReducer} from './MinicartReducer';

export const RootReducer = combineReducers({
    MinicartReducer: MinicartReducer
})