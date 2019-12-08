import {
  SET_LIST,
  SET_DETAIL,
  SET_LOAD_MORE,
  SET_CATEGORIES,
  SET_FILTER,
  SET_LOADING,
  SET_ERROR,
} from '../../actions/Ads/types';

const initState = {
  adsList: [],
  adData: [],
  error: null,
  loading: true,
  filters: {
    seller_type: 'all',
    state: 'all',
    q: null,
    price_min: 0,
    price_max: 1000000,
    city: null,
    category: null,
  },
  categories: [],
};

const adsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LIST: {
      return {
        ...state,
        adsList: action.payload,
      };
    }
    case SET_LOAD_MORE: {
      return {
        ...state,
        adsList: {
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous,
          results: state.adsList.results.concat(action.payload.results),
        },
      };
    }
    case SET_DETAIL: {
      return {
        ...state,
        adData: action.payload,
      };
    }
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.name]: action.value,
        },
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};

export default adsReducer;
