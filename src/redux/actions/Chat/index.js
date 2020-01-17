import API from '../../../api';
import { setError } from '../Error';

import {
  SET_THREADS,
  SET_MESSAGES,
  SET_LOADING,
  SET_MESSAGE,
  SET_OLD_MESSAGE,
  SET_OLD_THREADS,
} from './types';

const setThreads = threads => ({
  type: SET_THREADS,
  payload: threads,
});

const setOldThreads = threads => ({
  type: SET_OLD_THREADS,
  payload: threads,
});

const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const setMessage = message => ({
  type: SET_MESSAGE,
  payload: message,
});

const setOldMessage = messages => ({
  type: SET_OLD_MESSAGE,
  payload: messages,
});

export const setLoading = loading => ({
  type: SET_LOADING,
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
