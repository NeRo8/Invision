import API from '../../api';
import * as types from './types';
import { errorActions } from '../Error';
import { store } from '../store';
import { setError } from '../Error/action';

const setAdDetail = ad => ({
  type: types.SET_AD_DETAIL,
  payload: ad,
});

const setAdLoading = loading => ({
  type: types.SET_AD_LOADING,
  payload: loading,
});

const setAdToFavorite = id => ({
  type: types.ADD_AD_TO_FAVORITE,
  payload: id,
});

export const reportAd = (idForReport, message) => dispatch => {
  const reportData = new FormData();
  reportData.append('ad', idForReport);
  reportData.append('message', message);
  API.post('/ads/flag-ad/', reportData);
};

export const getAdDetail = id => dispatch => {
  dispatch(setAdLoading(true));

  API.get(`/ads/ad/${id}/`)
    .then(response => dispatch(setAdDetail(response.data)))
    .then(() => dispatch(setAdLoading(false)))
    .catch(error => dispatch(errorActions.setError(error)));
};

export const addToFavorite = id => dispatch => {
  const { adDetail } = store.getState().ad;

  var requestData = new FormData();
  requestData.append('ad_id', id);

  dispatch(setAdToFavorite(id));

  if (adDetail.is_favorite) {
    API.delete(`/ads/delete-favorite/${id}/`);
  } else {
    API.post('/ads/add-favorite/', requestData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
};

export const sendComment = data => dispatch => {
  API.post('/ads/ad-comment/', data)
    .then(response => console.log(response.data))
    .catch(error => dispatch(setError(error)));
};
