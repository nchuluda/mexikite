import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { school } from './school';
import { comments } from './comments';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            school,
            comments,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}