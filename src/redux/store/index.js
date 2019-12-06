import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import authReducer from '../reducers/Auth';
import adsReducer from '../reducers/adsReducer';
import inKuwaitReducer from '../reducers/inKuwait';
import filtersReducer from '../reducers/filtersReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  whitelist: ['auth'],
  blacklist: ['ads', 'inKuwait', 'filters'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  ads: adsReducer,
  inKuwait: inKuwaitReducer,
  filters: filtersReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);
