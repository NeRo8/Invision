import * as types from './types';

const initialState = {
  servicesList: [],
  filters: {
    category: null,
    q: null,
  },
  categories: [],
  loading: true,
  error: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SERVICES: {
      return {
        ...state,
        servicesList: action.payload,
      };
    }
    case types.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case types.SET_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.name]: action.value,
        },
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

export default servicesReducer;
