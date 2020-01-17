import * as types from './types';

export const setError = message => ({
  type: types.SET_ERROR,
  payload: message,
});

export const clearErr = () => ({
  type: types.CLEAR_ERROR,
});
