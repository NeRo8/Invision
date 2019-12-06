import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import authReducer from '../reducers/Auth';
import adsReducer from '../reducers/adsReducer';
import inKuwaitReducer from '../reducers/inKuwait';
import filtersReducer from '../reducers/filtersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ads: adsReducer,
  inKuwait: inKuwaitReducer,
  filters: filtersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
