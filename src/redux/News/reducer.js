import * as types from './types';

const initialState = {
  newsDetail: [],
  newsList: [],
  filters: {
    category: null,
    q: null,
    order_by: 'date',
  },
  categories: [],
  loading: true,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LIST: {
      return {
        ...state,
        newsList: action.payload,
      };
    }
    case types.SET_DETAIL: {
      return {
        ...state,
        newsDetail: action.payload,
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

export default newsReducer;
