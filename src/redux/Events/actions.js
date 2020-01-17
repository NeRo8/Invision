import API from '../../api';
import moment from 'moment';
import * as types from './types';
import { errorActions } from '../Error';

const setList = events => ({
  type: types.SET_EVENTS_LIST,
  payload: events,
});

const setEventsDetail = event => ({
  type: types.SET_EVENTS_DETAIL,
  payload: event,
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

export const getEvents = (filters = null) => dispatch => {
  var requestUrl = '';

  dispatch(setLoading(true));
  //Generate filters for request
  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        if (item === 'date') {
          requestUrl += `&${item}=${moment(filters[item]).format(
            'YYYY-MM-DD',
          )}`;
        } else {
          requestUrl += `&${item}=${filters[item]}`;
        }
      }
    });
  }
  API.get(`/events/events/${requestUrl}`)
    .then(response => {
      dispatch(setList(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorActions.setError(error)));
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/ads/categories/')
    .then(response => {
      dispatch(setCategories(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorActions.setError(error)));
};

export const getEventsDetail = id => dispatch => {
  dispatch(setLoading(true));

  API.get(`/events/event/${id}/`)
    .then(response => {
      dispatch(setEventsDetail(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorActions.setError(error)));
};
