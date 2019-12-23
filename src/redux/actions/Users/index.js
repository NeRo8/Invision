import { SET_PROFILE, SET_LOADING, SET_ERROR } from './types';

const DEFAULT_URL = 'https://staging.masaha.app/api/v1/users/';

const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
});

const setLoading = status => ({
  type: SET_LOADING,
  payload: status,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const getProfile = token => dispatch => {
  setLoading(true);

  fetch(`${DEFAULT_URL}profile-info/`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setProfile(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
