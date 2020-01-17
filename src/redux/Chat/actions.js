import API from '../../api';
import { setError } from '../Error/action';

import * as types from './types';

const setThreads = threads => ({
  type: types.SET_THREADS,
  payload: threads,
});

const setOldThreads = threads => ({
  type: types.SET_OLD_THREADS,
  payload: threads,
});

const setMessages = messages => ({
  type: types.SET_MESSAGES,
  payload: messages,
});

export const setMessage = message => ({
  type: types.SET_MESSAGE,
  payload: message,
});

const setOldMessage = messages => ({
  type: types.SET_OLD_MESSAGE,
  payload: messages,
});

export const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

export const fetchAllThreads = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/messaging/inbox/')
    .then(response => {
      dispatch(setThreads(response.data));
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => {
      dispatch(setError(error.message));
    });
};

export const loadOldThreads = url => dispatch => {
  API.get(url).then(response => {
    dispatch(setOldThreads(response.data));
  });
};

export const updataMessage = threadId => dispatch => {
  API.get(`/messaging/inbox/${threadId}/`).then(response => {
    dispatch(setMessages(response.data.results));
  });
};

export const loadOldMessages = url => dispatch => {
  API.get(url).then(response => {
    dispatch(setOldMessage(response.data));
  });
};

export const fetchAllMessages = threadId => dispatch => {
  dispatch(setLoading(true));

  API.get(`/messaging/inbox/${threadId}/`)
    .then(response => {
      dispatch(setMessages(response.data));
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => {
      dispatch(setError(error.message));
    });
};
