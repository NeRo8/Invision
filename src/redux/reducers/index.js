import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import authReducer from './Auth';
import adsReducer from './Ads';
import inKuwaitReducer from './inKuwait';
import usersReducer from './Users';
import chatReducer from './Chat';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  whitelist: ['auth'],
  blacklist: ['ads', 'inKuwait', 'filters', 'users', 'chat'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  ads: adsReducer,
  inKuwait: inKuwaitReducer,
  users: usersReducer,
  chat: chatReducer,
});

export default persistReducer(persistConfig, rootReducer);
