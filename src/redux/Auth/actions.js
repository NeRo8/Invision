import API, { setToken } from '../../api';
import { store } from '../store';
import { errorActions } from '../Error';
import * as types from './types';

const setUser = user => ({
  type: types.SIGN_IN,
  payload: user,
});

export const logout = () => ({
  type: types.LOGOUT,
});

const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

const setNewToken = token => ({
  type: types.REFRESH_TOKEN,
  payload: token,
});

export const login = data => dispatch => {
  dispatch(setLoading(true));
  API.post('/users/login/', data)
    .then(response => {
      dispatch(setUser(response.data));
      setToken(response.data.access_token);
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const refreshToken = () => dispatch => {
  const { refresh_token } = store.getState().auth.user;

  API.post('/users/refresh-token/', { refresh: refresh_token })
    .then(response => dispatch(setNewToken(response.data.access)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const loginWithFacebook = token => dispatch => {
  dispatch(setLoading(true));

  API.post(
    '/users/social-connect/',
    {
      provider: 'facebook',
      access_token: 'token',
    },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  )
    .then(response => {
      if (response.status === 200) {
        dispatch(setUser(response.data));
        dispatch(setLoading(false));
      } else {
        dispatch(errorActions.setError(response));
        dispatch(setLoading(false));
      }
    })
    .catch(error => {
      dispatch(setLoading(false));
      dispatch(errorActions.setError(error));
    });
};

export const restorePassword = emailIncome => dispatch => {
  API.post('/users/forgot-password/', { email: emailIncome })
    .then(response => console.warn('Response', response))
    .catch(error => errorActions.setError(error));
};
