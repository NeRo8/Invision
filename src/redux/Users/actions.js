import { Platform } from 'react-native';
import API from '../../api';
import { errorActions } from '../Error';

import { store } from '../store';

import * as types from './types';

const setProfile = profile => ({
  type: types.SET_PROFILE,
  payload: profile,
});

const setAds = ads => ({
  type: types.SET_PROFILE_ADS,
  payload: ads,
});

const setLoading = status => ({
  type: types.SET_LOADING,
  payload: status,
});

const setNotificationSettings = settings => ({
  type: types.SET_NOTIFICATION_SETTINGS,
  payload: settings,
});

const setAvatar = avatar => ({
  type: types.SET_AVATAR,
  payload: avatar,
});

export const setAdsStatus = active => dispatch => {
  dispatch({
    type: types.SET_PROFILE_ADS_STATUS,
    payload: active,
  });
  dispatch(getProfileAds());
};

export const getProfile = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/users/profile-info/')
    .then(response => dispatch(setProfile(response.data)))
    .then(() => dispatch(getProfileAds()))
    .catch(error => {
      dispatch(errorActions.setError(error));
    });
};

export const getProfileAds = () => dispatch => {
  const { adsStatus } = store.getState().users;
  API.get(`/ads/my/?status=${adsStatus}`)
    .then(response => dispatch(setAds(response.data)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => {
      dispatch(errorActions.setError(error));
    });
};

export const deleteAds = id => dispatch => {
  API.delete(`/ads/delete-ad/${id}/`);

  dispatch(getProfileAds());
};

export const changeProfile = newProfile => dispatch => {
  API.put('/users/profile-info/', newProfile).catch(error =>
    dispatch(errorActions.setError(error)),
  );
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
  })
    .then(response => dispatch(setAvatar(response.data.avatar)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const updateAdStatus = (id, status) => dispatch => {
  var formData = new FormData();
  formData.append('status', status === 'active' ? 1 : 0);

  API.patch(`/ads/update-status/${id}/`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(() => dispatch(setAdsStatus(status)))
    .catch(error => dispatch(errorActions.setError(error)));
};
