import API, { setToken } from '../../../api';

const USERS = 'https://staging.masaha.app/api/v1/users';

import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
export const SET_LOADING = 'SET_AUTH_LOADING';
export const SET_ERROR = 'SET_AUTH_ERROR';
export const REFRESH_TOKEN = 'REFRESH_AUTH_TOKEN';

const setUser = user => ({
  type: SIGN_IN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

const setNewToken = token => ({
  type: REFRESH_TOKEN,
  payload: token,
});

export const login = data => dispatch => {
  dispatch(setLoading(true));
  API.post('/users/login/', data)
    .then(response => {
      dispatch(setUser(response.data));
      dispatch(setLoading(false));
      setToken(response.data.access_token);
    })
    .catch(error => dispatch(setError(error)));
};

export const refreshToken = oldToken => dispatch => {
  fetch(`${USERS}/refresh-token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: oldToken,
    }),
  })
    .then(response => response.json())
    .then(responseJson => dispatch(setNewToken(responseJson.access)))
    .then(error => dispatch(setError(error)));
};

export const loginWithFacebook = token => dispatch => {
  dispatch(setLoading(true));
  console.log('Token in actions: ', token);
  var socialData = new FormData();

  socialData.append('provider', 'facebook');
  socialData.append('access_token', token);

  axios({
    method: 'post',
    url: `${USERS}/social-connect/`,
    data: socialData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(response => {
      console.log('Response: ', response);
      if (response.status === 200) {
        dispatch(setUser(response.data));
        dispatch(setLoading(false));
      } else {
        dispatch(setError(response));
        dispatch(setLoading(false));
      }
    })
    .catch(error => {
      dispatch(setLoading(false));
      dispatch(setError(error));
    });
};
