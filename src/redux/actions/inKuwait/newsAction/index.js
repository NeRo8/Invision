import {
  SET_LIST,
  SET_DETAIL,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER,
  SET_CATEGORIES,
} from './types';

const DEFAULT_URL = 'https://staging.masaha.app/api/v1/blog';

const setList = list => ({
  type: SET_LIST,
  payload: list,
});

const setDetail = detail => ({
  type: SET_DETAIL,
  payload: detail,
});

const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const setFilter = (name, value) => ({
  type: SET_FILTER,
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
    .catch(error => dispatch(setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/categories/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCategories(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};

export const getNewsDetail = id => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/news/${id}/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setDetail(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};
