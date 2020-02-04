import API from '../../api';
import { store } from '../store';

import * as types from './types';

const setCategories = data => ({
  type: types.SET_CATEGORIES,
  payload: data,
});

export const setReducerValue = (name, value) => ({
  type: types.SET_VALUE,
  name,
  value,
});

export const addImage = image => ({
  type: types.ADD_IMAGE,
  payload: image,
});

export const getCategories = () => dispatch => {
  API.get('/ads/categories/').then(response =>
    dispatch(setCategories(response.data)),
  );
};

export const createAd = () => dispatch => {
  const { ad } = store.getState().adCreate;
  const adData = new FormData();

  adData.append('title', ad.title);
  adData.append('description', ad.description);
  adData.append('price', ad.price);
  adData.append('currency', ad.currency);
  adData.append('is_seller_private', ad.is_seller_private ? 'True' : 'False');
  adData.append('state', ad.state);
  adData.append('city', ad.city.pk);
  adData.append('category', ad.category.pk);

  adData.append('email', ad.email);
  adData.append('phone_number', ad.phone_number);
  adData.append('full_name', ad.full_name);

  for (let index in ad.images) {
    adData.append(`image${index}`, ad.images[index]);
  }

  console.log('FormData', adData);
  API.post('/ads/add-an-ad/', adData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(response => console.log('Resporse add an ad', response.data));
};
