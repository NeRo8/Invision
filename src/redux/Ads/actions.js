import API, { setToken } from '../../api';
import { store } from '../store';
import { errorActions } from '../Error';

import * as types from './types';

const setAdsList = ads => ({
  type: types.SET_LIST,
  payload: ads,
});

const setAdsLoadMore = ads => ({
  type: types.SET_LOAD_MORE,
  payload: ads,
});

const setCategoriesLoadMore = categories => ({
  type: types.SET_CATEGORIES_LOAD_MORE,
  payload: categories,
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

//Add and delete from favorite
const setAdsToFavorite = id => ({
  type: types.SET_ADS_TO_FAVORITE,
  payload: id,
});

//API REDUX
//Get all ads with filters
export const getAds = () => dispatch => {
  const { filters } = store.getState().ads;
  //Initialize token for all requests
  const { access_token } = store.getState().auth.user;
  if (access_token !== null) {
    setToken(access_token);
  }

  dispatch(setLoading(true));

  var requestUrl = '';

  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        requestUrl += `&${item}=${filters[item]}`;
      }
    });
  }

  API.get(`/ads/ads/?${requestUrl}`)
    .then(response => dispatch(setAdsList(response.data)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/ads/categories/')
    .then(response => {
      dispatch(setCategories(response.data));
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const getCategoriesLoadMore = next => dispatch => {
  if (next !== null) {
    API.get(next)
      .then(response => dispatch(setCategoriesLoadMore(response.data)))
      .catch(error => dispatch(errorActions.setError(error)));
  }
};

export const getAdsLoadMore = url => dispatch => {
  if (url !== null) {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setAdsLoadMore(responseJson));
      })
      .catch(error => {
        dispatch(errorActions.setError(error));
      });
  }
};

export const addToFavorite = id => dispatch => {
  var requestData = new FormData();
  requestData.append('ad_id', id);

  API.post('/ads/add-favorite/', requestData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  dispatch(setAdsToFavorite(id));
};

export const removeFromFavorite = id => dispatch => {
  API.delete(`/ads/delete-favorite/${id}/`);

  dispatch(setAdsToFavorite(id));
};
