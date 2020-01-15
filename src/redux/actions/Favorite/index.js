import API from '../../../api';

import * as types from './types';

const setFavoriteAds = ads => ({
  type: types.SET_FAVORITE_ADS,
  payload: ads,
});

const setLoading = (tabValue, loading) => ({
  type: types.SET_LOADING,
  tabValue,
  loading,
});

export const getFavoriteAds = () => dispatch => {
  API.get('/ads/favorites/')
    .then(response => dispatch(setFavoriteAds(response.data)))
    .then(() => dispatch(setLoading('favoriteAdsLoading', false)))
    .catch(error => dispatch(setError(error.message)));
};
