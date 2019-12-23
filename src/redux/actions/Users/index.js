import { SET_PROFILE, SET_LOADING, SET_ERROR, SET_PROFILE_ADS } from './types';

const DEFAULT_URL = 'https://staging.masaha.app/api/v1/users/';
const ADS = 'https://staging.masaha.app/api/v1/ads/';

const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
});

const setAds = ads => ({
  type: SET_PROFILE_ADS,
  payload: ads,
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
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getProfileAds = token => dispatch => {
  fetch(`${ADS}my/`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAds(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
