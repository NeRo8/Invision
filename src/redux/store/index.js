import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';
import adsReducer from '../reducers/adsReducer';

const rootReducer = combineReducers({ auth: authReducer, ads: adsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
