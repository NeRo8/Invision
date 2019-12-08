const DEFAULT_URL = 'https://staging.masaha.app/api/v1/faq';

import {
  SET_FAQ_DETAIL,
  SET_FAQ_LIST,
  SET_CATEGORIES,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER,
} from './types';

const setQuestionDetail = faq => ({
  type: SET_FAQ_DETAIL,
  payload: faq,
});

const setQuestionList = faq => ({
  type: SET_FAQ_LIST,
  payload: faq,
});

const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

const setLoading = loading => ({
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

export const getFaqs = (filters = null) => dispatch => {
  var requestUrl = `${DEFAULT_URL}/questions/?`;

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
      dispatch(setQuestionList(responseJson));
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

export const getFaqDetail = id => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/question/${id}/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setQuestionDetail(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};

export const setQuestion = (token, data) => dispatch => {
  var requestData = new FormData();

  for (const key in data) {
    requestData.append(key, data[key]);
  }

  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/ask-question/`, {
    method: 'post',

    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    body: requestData,
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};
