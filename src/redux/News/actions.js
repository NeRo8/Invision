import * as types from './types';
import { errorActions } from '../Error';

const DEFAULT_URL = 'https://staging.masaha.app/api/v1/blog';

const setList = list => ({
  type: types.SET_LIST,
  payload: list,
});

const setDetail = detail => ({
  type: types.SET_DETAIL,
  payload: detail,
});

const setCategories = categories => ({
  type: types.SET_CATEGORIES,
  payload: categories,
});

export const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

export const setFilter = (name, value) => ({
  type: types.SET_FILTER,
  name,
  value,
});

export const getNews = (filters = null) => dispatch => {
  var requestUrl = `${DEFAULT_URL}/news/?`;

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
      dispatch(setList(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorActions.setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/categories/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCategories(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorActions.setError(error)));
};

export const getNewsDetail = id => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/news/${id}/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setDetail(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorActions.setError(error)));
};

export const setReport = (commentId, token) => dispatch => {
  fetch(`${DEFAULT_URL}/report/${commentId}/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }).catch(error => dispatch(errorActions.setError(error)));
};

export const setComment = (data, token) => dispatch => {
  fetch(`${DEFAULT_URL}/new-comment/`, {
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
    .catch(error => dispatch(errorActions.setError(error)));
};
