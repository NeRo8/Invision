import {
  SET_ADS_ADS,
  SET_ADS_FAVORITES,
  SET_ADS_CATEGORIES,
  SET_ADS_AD,
  SET_LOADING,
  SET_ERROR,
} from '../actions/adsAction';

const initState = {
  adsList: [],
  categoriesList: [],
  adsFavoritesList: [],
  adData: [],
  error: null,
  loading: true,
  loadingAd: true,
};

const adsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ADS_ADS: {
      return {
        ...state,
        adsList: action.ads,
      };
    }
    case SET_ADS_AD: {
      return {
        ...state,
        adData: action.ad,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
        loadingAd: action.loadingAd,
      };
    }
    case SET_ADS_CATEGORIES: {
      return {
        ...state,
        categoriesList: action.categories,
      };
    }
    case SET_ADS_FAVORITES: {
      return {
        ...state,
        adsFavoritesList: action.ads,
      };
    }
    default:
      return state;
  }
};

export default adsReducer;
