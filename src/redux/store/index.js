import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';

import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({ auth: authReducer });

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
