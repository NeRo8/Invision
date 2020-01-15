import API, { setToken } from '../../../api';
import { store } from '../../store';
import { getAdDetail } from '../../../redux/actions/AdDetail';

const ADS = 'https://staging.masaha.app/api/v1/ads/';

import {
  SET_LIST,
  SET_FILTER,
  SET_LOADING,
  SET_ERROR,
  SET_CATEGORIES,
  SET_LOAD_MORE,
  SET_FAVORITES_LIST,
  SET_SELLER_PROFILE,
  SET_ADS_TO_FAVORITE,
} from './types';

const setAdsList = ads => ({
  type: SET_LIST,
  payload: ads,
});

const setAdsLoadMore = ads => ({
  type: SET_LOAD_MORE,
  payload: ads,
});

const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  name,
  value,
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

const setAdsFavorites = favorites => ({
  type: SET_FAVORITES_LIST,
  payload: favorites,
});

const setSellerProfile = user => ({
  type: SET_SELLER_PROFILE,
  payload: user,
});

const setAdsToFavorite = id => ({
  type: SET_ADS_TO_FAVORITE,
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
  var requestUrl = `${ADS}ads/?`;

  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        requestUrl += `&${item}=${filters[item]}`;
      }
    });
  }

  API.get(requestUrl)
    .then(response => dispatch(setAdsList(response.data)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  var requestString = `${ADS}categories/?`;

  fetch(requestString, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCategories(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
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

  fetch(`${ADS}/add-favorite/`, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    body: requestData,
  });
  if (screen === 'main') {
    dispatch(setAdsToFavorite(id));
  } else {
    dispatch(getAdDetail(id, token));
  }
};

export const removeFromFavorite = (id, token, screen = 'main') => dispatch => {
  fetch(`${ADS}/delete-favorite/${id}/`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

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
  console.log(userid);
  setLoading(true);
  API.get(`/ads/seller/${userid}/`).then(
    response => dispatch(setSellerProfile(response.data)),
    setLoading(false),
  );
  // fetch(`${ADS}seller/${userid}/`)
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     dispatch(setSellerProfile(responseJson));
  //     dispatch(setLoading(false));
  //   })
  //   .then(error => {
  //     dispatch(setError(error));
  //     dispatch(setLoading(false));
  //   });
};

export const setComment = (data, token) => dispatch => {
  fetch(`${ADS}/ad-comment/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log(error));

  dispatch(getAdDetail(data.ad, token));
};

export const deleteFavorites = () => dispatch => {
  const { access_token } = store.getState().auth.user;

  API.delete('/ads/delete-favorites/');

  dispatch(getAdsFavorites(access_token));
  dispatch(getAds(access_token));
};
