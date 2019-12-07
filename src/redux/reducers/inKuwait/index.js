import { combineReducers } from 'redux';

import servicesReducer from './servicesReducer';
import faqReducer from './faqReducer';
import eventsReducer from './eventsReducer';

import {
  SET_COUNT_LIST,
  SET_LOADING,
  SET_ERROR,
} from '../../actions/inKuwait/index';

const initialState = {
  countList: [],
  loading: true,
  error: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT_LIST: {
      return {
        ...state,
        countList: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
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
});
