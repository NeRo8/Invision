import { Platform } from 'react-native';
import API from '../../../api';

import {
  SET_PROFILE,
  SET_LOADING,
  SET_ERROR,
  SET_PROFILE_ADS,
  SET_NOTIFICATION_SETTINGS,
} from './types';

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

export const getProfile = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/users/profile-info/')
    .then(response => dispatch(setProfile(response.data)))
    .then(() => dispatch(getProfileAds()))
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getProfileAds = () => dispatch => {
  API.get('/ads/my/')
    .then(response => dispatch(setAds(response.data)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => {
      dispatch(setError(error));
    });
};

export const deleteAds = id => dispatch => {
  API.delete(`/ads/delete-ad/${id}/`);

  dispatch(getProfileAds());
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
  const data = new FormData();
  data.append('avatar', {
    name: avatar.fileName,
    type: avatar.type === null ? 'image/jpeg' : avatar.type,
    uri:
      Platform.OS === 'android'
        ? avatar.uri
        : avatar.uri.replace('file://', ''),
  });

  API.post('users/change-avatar/', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(response => console.log(response));
};
