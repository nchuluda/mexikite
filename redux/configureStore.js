import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { school } from './school';
import { comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            school,
            comments
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}