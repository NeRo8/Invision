import {
  SET_ADS_ADS,
  SET_ADS_FAVORITES,
  SET_ADS_AD,
  SET_LOADING,
  SET_ERROR,
  SET_PAGE,
  DIV_PAGE,
} from '../actions/adsAction';

const initState = {
  adsList: [],
  adsFavoritesList: [],
  adData: [],
  error: null,
  loading: true,
  loadingAd: true,
  page: 0,
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
    case SET_ADS_FAVORITES: {
      return {
        ...state,
        adsFavoritesList: action.ads,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    case DIV_PAGE: {
      return {
        ...state,
        page: state.page - 1,
      };
    }
    default:
      return state;
  }
};

export default adsReducer;
