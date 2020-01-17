import API from '../../api';

import * as types from './types';

const setAdDetail = ad => ({
  type: types.SET_AD_DETAIL,
  payload: ad,
});

const setAdLoading = loading => ({
  type: types.SET_AD_LOADING,
  payload: loading,
});

const setAdError = error => ({
  type: types.SET_AD_ERROR,
  payload: error,
});

export const getAdDetail = id => dispatch => {
  dispatch(setAdLoading(true));

  API.get(`/ads/ad/${id}/`)
    .then(response => dispatch(setAdDetail(response.data)))
    .then(() => dispatch(setAdLoading(false)))
    .catch(error => dispatch(setAdError(error)));
};
