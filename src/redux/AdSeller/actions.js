import API from '../../api';
import * as types from './types';
import { setError } from '../Error/action';

const setSellerProfile = profile => ({
  type: types.SET_SELLER_PROFILE,
  payload: profile,
});

const setSellerAds = ads => ({
  type: types.SET_SELLER_ADS,
  payload: ads,
});

const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

export const getSellerProfile = userId => dispatch => {
  dispatch(setLoading(true));

  API.get(`/ads/seller/${userId}`)
    .then(response => {
      dispatch(setSellerProfile(response.data.user));
      return response;
    })
    .then(response => dispatch(setSellerAds(response.data.ads)))
    .then(() => dispatch(setLoading(false)))
    .catch(error => dispatch(setError(error)));
};
