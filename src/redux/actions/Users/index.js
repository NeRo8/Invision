import { Platform } from 'react-native';
import API from '../../../api';
import { setError } from '../../actions/Error';

import { store } from '../../store';

import {
  SET_PROFILE,
  SET_LOADING,
  SET_PROFILE_ADS,
  SET_NOTIFICATION_SETTINGS,
  SET_PROFILE_ADS_STATUS,
} from './types';

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

const setNotificationSettings = settings => ({
  type: SET_NOTIFICATION_SETTINGS,
  payload: settings,
});

export const setAdsStatus = active => dispatch => {
  dispatch({
    type: SET_PROFILE_ADS_STATUS,
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
      dispatch(setError(error));
    });
};

export const getProfileAds = () => dispatch => {
  const { adsStatus } = store.getState().users;
  API.get(`/ads/my/?status=${adsStatus}`)
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

export const changeProfile = newProfile => dispatch => {
  API.put('/users/profile-info/', newProfile)
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
