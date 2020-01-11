import API, { setToken } from '../../../api';
import { store } from '../../store';

const USERS = 'https://staging.masaha.app/api/v1/users';

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
      setToken(response.data.access_token);
    })
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(setError(error)));
};

export const refreshToken = () => dispatch => {
  const { refresh_token } = store.getState().auth.user;

  if (refresh_token !== null) {
    API.post('/users/refresh-token/', { refresh: refresh_token })
      .then(response => dispatch(setNewToken(response.data.access)))
      .catch(error => console.log('Refresh token error:', error));
  }
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
        dispatch(setError(response));
        dispatch(setLoading(false));
      }
    })
    .catch(error => {
      dispatch(setLoading(false));
      dispatch(setError(error));
    });
};
