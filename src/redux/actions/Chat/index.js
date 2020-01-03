import { SET_THREADS, SET_MESSAGES, SET_LOADING, SET_ERROR } from './types';

import API from '../../../api';

const setThreads = threads => ({
  type: SET_THREADS,
  payload: threads,
});

const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchAllThreads = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/messaging/inbox/')
    .then(response => {
      dispatch(setThreads(response.data.results));
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => {
      dispatch(setError(error));
    });
};

export const fetchAllMessages = threadId => dispatch => {
  dispatch(setLoading(true));

  API.get(`/messaging/inbox/${threadId}/`)
    .then(response => {
      dispatch(setMessages(response.data.results));
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => {
      dispatch(setError(error));
    });
};
