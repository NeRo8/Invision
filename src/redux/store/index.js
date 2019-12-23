import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import pReducer from '../reducers';

export const store = createStore(pReducer, applyMiddleware(thunk, logger));

export const persistor = persistStore(store);
