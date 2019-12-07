import {
  SET_EVENTS_LIST,
  SET_LOADING,
  SET_ERROR,
  SET_EVENTS_DETAIL,
} from './types';

const DEFAULT_URL = 'https://staging.masaha.app/api/v1/events';

const setList = events => ({
  type: SET_EVENTS_LIST,
  payload: events,
});

const setEventsDetail = event => ({
  type: SET_EVENTS_DETAIL,
  payload: event,
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

export const getEvents = (filters = null) => dispatch => {
  var requestUrl = `${DEFAULT_URL}/events/?`;

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

export const getEventsDetail = id => dispatch => {
  dispatch(setLoading(true));

  fetch(`${DEFAULT_URL}/event/${id}/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setEventsDetail(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};

export const setQuestion = (token, data) => dispatch => {
  const requestData = new FormData();

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
