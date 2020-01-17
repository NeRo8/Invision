import * as types from './types';

const initState = {
  adsList: [],
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
    case types.SET_LIST: {
      return {
        ...state,
        adsList: action.payload,
      };
    }
    case types.SET_LOAD_MORE: {
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

    case types.SET_ADS_TO_FAVORITE: {
      var newAdsList = state.adsList.results.map(ad =>
        ad.pk === action.payload
          ? { ...ad, is_favorite: !Boolean(ad.is_favorite) }
          : { ...ad },
      );

      return {
        ...state,
        adsList: {
          ...state.adsList,
          results: newAdsList,
        },
      };
    }

    default:
      return state;
  }
};

export default adsReducer;
