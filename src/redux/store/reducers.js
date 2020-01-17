import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import authReducer from '../Auth/reducer';
import adsReducer from '../Ads/reducer';
import adDetailReducer from '../AdDetail/reducer';
import createAdReducer from '../AdCreate/reducer';
import inKuwaitReducer from '../inKuwait/reducer';
import usersReducer from '../Users/reducer';
import chatReducer from '../Chat/reducer';
import favoriteReducer from '../Favorite/reducer';
import errorReducer from '../Error/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  whitelist: ['auth'],
  blacklist: [
    'ads',
    'inKuwait',
    'filters',
    'users',
    'chat',
    'adCreate',
    'ad',
    'favorite',
    'error',
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  ads: adsReducer,
  adCreate: createAdReducer,
  inKuwait: inKuwaitReducer,
  users: usersReducer,
  chat: chatReducer,
  ad: adDetailReducer,
  favorite: favoriteReducer,
  error: errorReducer,
});

export default persistReducer(persistConfig, rootReducer);
