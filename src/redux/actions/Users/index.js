import { Platform } from 'react-native';

import {
  SET_PROFILE,
  SET_LOADING,
  SET_ERROR,
  SET_PROFILE_ADS,
  SET_NOTIFICATION_SETTINGS,
} from './types';

import API from '../../../api';

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

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

const setNotificationSettings = settings => ({
  type: SET_NOTIFICATION_SETTINGS,
  payload: settings,
});

export const getProfile = token => dispatch => {
  dispatch(setLoading(true));

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
    .then(() => {
      dispatch(getProfileAds(token));
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

export const deleteAds = (id, token) => dispatch => {
  fetch(`${ADS}delete-ad/${id}/`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  dispatch(getProfileAds(token));
};

export const changeProfile = (newProfile, token) => dispatch => {
  fetch(`${DEFAULT_URL}profile-info/`, {
    method: 'PUT',

    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      full_name: newProfile.full_name,
      email: newProfile.email,
      phone_number: newProfile.phone_number,
      city: newProfile.city,
    }),
  })
    .then(response => response.json())
    .then(response => {
      if (response.full_name !== undefined) {
        dispatch(setError(response));
      } else {
        dispatch(setError('Success'));
      }
    })
    .catch(error => dispatch(setError(error)));
};

export const getNotificationSettings = () => dispatch => {
  API.get('/users/change-notification/').then(response =>
    dispatch(setNotificationSettings(response.data)),
  );
};

export const updateNotificationSettings = data => dispatch => {
  API.put('/users/change-notification/', data).then(response =>
    dispatch(setNotificationSettings(response.data)),
  );
};

export const updateAvatar = avatar => dispatch => {
  console.log('avatar in actions: ', avatar);
  const data = new FormData();
  data.append('avatar', {
    name: avatar.fileName,
    type: avatar.type === null ? 'image/jpeg' : avatar.type,
    uri:
      Platform.OS === 'android'
        ? avatar.uri
        : avatar.uri.replace('file://', ''),
  });

  console.log('data in actions: ', data);

  API.post('users/change-avatar/', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(response => console.log(response));
};
