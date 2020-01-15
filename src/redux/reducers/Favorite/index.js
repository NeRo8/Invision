import * as types from '../../actions/Favorite/types';

const initState = {
  favoriteAds: [],
  favoriteServices: [],
  favoriteEvents: [],

  favoriteAdsLoading: true,
  favoriteServicesLoading: true,
  favoriteEventsLoading: true,
};

const favoriteReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_FAVORITE_ADS: {
      return {
        ...state,
        favoriteAds: action.payload,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        [action.tabValue]: action.loading,
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
