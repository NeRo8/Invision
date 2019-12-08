const ADS = 'https://staging.masaha.app/api/v1/ads/';

import {
  SET_LIST,
  SET_DETAIL,
  SET_FILTER,
  SET_LOADING,
  SET_ERROR,
  SET_CATEGORIES,
  SET_LOAD_MORE,
} from './types';

const setAdsList = ads => ({
  type: SET_LIST,
  payload: ads,
});

const setAdsDetail = ad => ({
  type: SET_DETAIL,
  payload: ad,
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

//API REDUX
export const getAds = (filters = null) => dispatch => {
  dispatch(setLoading(true));

  var requestUrl = `${ADS}ads/?`;

  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        requestUrl += `&${item}=${filters[item]}`;
      }
    });
  }

  fetch(requestUrl, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsList(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getAdsDetail = (token = null, id) => dispatch => {
  dispatch(setLoading(true));

  let head = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token !== null) {
    head = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
  }

  fetch(`${ADS}ad/${id}`, head)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsDetail(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
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
