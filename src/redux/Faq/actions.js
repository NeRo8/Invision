import API from '../../api';

import * as types from './types';

const setQuestionDetail = faq => ({
  type: types.SET_FAQ_DETAIL,
  payload: faq,
});

const setQuestionList = faq => ({
  type: types.SET_FAQ_LIST,
  payload: faq,
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

export const getFaqs = (filters = null) => dispatch => {
  var requestUrl = `/faq/questions/?`;

  dispatch(setLoading(true));
  //Generate filters for request
  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        requestUrl += `&${item}=${filters[item]}`;
      }
    });
  }

  API.get(requestUrl)
    .then(response => {
      dispatch(setQuestionList(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  API.get(`faq/categories/`)
    .then(response => {
      dispatch(setCategories(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};

export const getFaqDetail = id => dispatch => {
  dispatch(setLoading(true));

  API.get(`faq/question/${id}/`)
    .then(response => {
      dispatch(setQuestionDetail(response.data));
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

  API.post('/faq/ask-question/', requestData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(() => {
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};
