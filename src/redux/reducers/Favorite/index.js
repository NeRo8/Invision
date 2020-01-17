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
    case types.DELETE_FAVORITE_AD: {
      var newFavoriteAds = state.favoriteAds.results.filter(
        item => item.ad.pk !== action.id,
      );
      return {
        ...state,
        favoriteAds: {
          ...state.favoriteAds,
          results: newFavoriteAds,
        },
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
