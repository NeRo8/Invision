import API from '../../api';
import * as types from './types';
import { errorActions } from '../Error';

const setFavoriteAds = ads => ({
  type: types.SET_FAVORITE_ADS,
  payload: ads,
});

const setLoading = (tabValue, loading) => ({
  type: types.SET_LOADING,
  tabValue,
  loading,
});

const deleteFavoriteAd = id => ({
  type: types.DELETE_FAVORITE_AD,
  id,
});

export const getFavoriteAds = () => dispatch => {
  dispatch(setLoading('favoriteAdsLoading', true));
  API.get('/ads/favorites/')
    .then(response => dispatch(setFavoriteAds(response.data)))
    .then(() => dispatch(setLoading('favoriteAdsLoading', false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const clearAllFavorites = () => dispatch => {
  API.delete('/ads/delete-favorites/')
    .then(response => dispatch(setFavoriteAds([])))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const clearFavoriteAd = id => dispatch => {
  API.delete(`/ads/delete-favorite/${id}/`)
    .then(response => dispatch(deleteFavoriteAd(id)))
    .catch(error => dispatch(errorActions.setError(error)));
};
