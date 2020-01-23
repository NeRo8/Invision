import API from '../../api';
import * as types from './types';
import { store } from '../store';
import { setError } from '../Error/action';

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

export const setFilter = (name, value) => ({
  type: types.SET_FILTER,
  name,
  value,
});

export const getFaqs = () => dispatch => {
  const { filters } = store.getState().inKuwait.faq;
  var requestUrl = '';

  dispatch(setLoading(true));

  Object.keys(filters).forEach(item => {
    if (filters[item] !== null) {
      requestUrl += `&${item}=${filters[item]}`;
    }
  });

  API.get(`/faq/questions/?${requestUrl}`)
    .then(response => {
      dispatch(setQuestionList(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorAction.setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  API.get(`/faq/categories/`)
    .then(response => {
      dispatch(setCategories(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorActions.setError(error)));
};

export const getFaqDetail = id => dispatch => {
  dispatch(setLoading(true));

  API.get(`faq/question/${id}/`)
    .then(response => {
      dispatch(setQuestionDetail(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorAction.setError(error)));
};

export const setQuestion = data => dispatch => {
  var requestData = new FormData();

  for (const key in data) {
    requestData.append(key, data[key]);
  }

  API.post('/faq/ask-question/', requestData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).catch(error => dispatch(setError(error)));
};

export const sendComment = data => dispatch => {
  API.post('/faq/new-comment/', data)
    .then(response => console.log(response.status))
    .catch(error => dispatch(setError(error)));
};

export const reportAnswer = id => dispatch => {
  API.post(`/faq/report/${id}/`)
    .then(response => console.log(response.status))
    .catch(error => dispatch(setError(error)));
};
