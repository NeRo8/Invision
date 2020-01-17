import API, { setToken } from '../../api';
import { store } from '../store';
import { getAdDetail } from '../AdDetail';

import * as types from './types';

const setAdsList = ads => ({
  type: types.SET_LIST,
  payload: ads,
});

const setAdsLoadMore = ads => ({
  type: types.SET_LOAD_MORE,
  payload: ads,
});

const setCategories = categories => ({
  type: types.SET_CATEGORIES,
  payload: categories,
});

export const setFilter = (name, value) => ({
  type: types.SET_FILTER,
  name,
  value,
});

export const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: types.SET_ERROR,
  payload: error,
});

const setAdsFavorites = favorites => ({
  type: types.SET_FAVORITES_LIST,
  payload: favorites,
});

const setSellerProfile = user => ({
  type: types.SET_SELLER_PROFILE,
  payload: user,
});

const setAdsToFavorite = id => ({
  type: types.SET_ADS_TO_FAVORITE,
  payload: id,
});

//API REDUX
//Get list ads
export const getAds = (filters = null) => dispatch => {
  dispatch(setLoading(true));
  //Initialize token, for request
  const { access_token } = store.getState().auth.user;

  if (access_token !== null) {
    setToken(access_token);
  }
  var requestUrl = '';

  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        requestUrl += `&${item}=${filters[item]}`;
      }
    });
  }

  API.get(`/ads/?${requestUrl}`)
    .then(response => dispatch(setAdsList(response.data)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/ads/categories/')
    .then(response => {
      dispatch(setCategories(response.data));
    })
    .then(() => setLoading(false))
    .catch(error => dispatch(setError(error)));
};

export const getAdsLoadMore = url => dispatch => {
  if (url === null) {
    dispatch(setError('Next not exist'));
  } else {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setAdsLoadMore(responseJson));
      })
      .catch(error => {
        dispatch(setError(error));
      });
  }
};

export const addToFavorite = (id, token, screen = 'main') => dispatch => {
  var requestData = new FormData();
  requestData.append('ad_id', id);

  API.post('/ads/add-favorite/', requestData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (screen === 'main') {
    dispatch(setAdsToFavorite(id));
  } else {
    dispatch(getAdDetail(id, token));
  }
};

export const removeFromFavorite = (id, token, screen = 'main') => dispatch => {
  API.delete(`/ads/delete-favorite/${id}/`);

  if (screen === 'main') {
    dispatch(setAdsToFavorite(id));
  } else {
    dispatch(getAdDetail(id, token));
  }
};

export const getAdsFavorites = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/ads/favorites/')
    .then(response => dispatch(setAdsFavorites(response.data)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(setError(error)));
};

export const getSellerProfile = userid => dispatch => {
  setLoading(true);
  API.get(`/ads/seller/${userid}/`).then(
    response => dispatch(setSellerProfile(response.data)),
    setLoading(false),
  );
};

export const setComment = (data, token) => dispatch => {
  API.post('ads/ad-comment/', data);

  dispatch(getAdDetail(data.ad, token));
};

export const deleteFavorites = () => dispatch => {
  const { access_token } = store.getState().auth.user;

  API.delete('/ads/delete-favorites/');

  dispatch(getAdsFavorites(access_token));
  dispatch(getAds(access_token));
};
