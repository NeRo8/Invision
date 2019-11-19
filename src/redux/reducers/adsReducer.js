import {
  SET_ADS_ADS,
  SET_ADS_FAVORITES,
  SET_ADS_CATEGORIES,
} from '../actions/adsAction';

const initState = {
  adsList: [],
  categoriesList: [],
  adsFavoritesList: [],
};

const adsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ADS_ADS: {
      return {
        ...state,
        adsList: action.ads,
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
