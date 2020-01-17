import { combineReducers } from 'redux';

import servicesReducer from '../Services';
import faqReducer from '../Faq';
import eventsReducer from '../Events';
import newsReducer from '../News';

import * as types from './types';

const initialState = {
  countList: [],
  loading: true,
  error: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COUNT_LIST: {
      return {
        ...state,
        countList: action.payload,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  main: mainReducer,
  services: servicesReducer,
  faq: faqReducer,
  events: eventsReducer,
  news: newsReducer,
});
