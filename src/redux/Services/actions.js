const DEFAULT_URL = 'https://staging.masaha.app/api/v1/common';

import * as types from './types';

const setServices = services => ({
  type: types.SET_SERVICES,
  payload: services,
});

const setCategories = categories => ({
  type: types.SET_CATEGORIES,
  payload: categories,
});

export const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: types.SET_ERROR,
  payload: error,
});

export const setFilter = (name, value) => ({
  type: types.SET_FILTER,
  name,
  value,
});

export const getServices = (filters = null) => dispatch => {
  var requestUrl = `${DEFAULT_URL}/services/?`;

  dispatch(setLoading(true));
  //Generate filters for request
  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        requestUrl += `&${item}=${filters[item]}`;
      }
    });
  }

  fetch(requestUrl)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setServices(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/service-categories/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCategories(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};
