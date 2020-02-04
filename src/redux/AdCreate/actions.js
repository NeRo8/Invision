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

  adData.append('title', 'Test ads');
  adData.append('description', 'Test ads');
  adData.append('price', 300);
  adData.append('currency', 'usd');
  adData.append('is_seller_private', true);
  adData.append('state', 'new');
  adData.append('city', { pk: 2, name: 'Kuwait' });
  adData.append('category', {
    pk: 6,
    name: 'Pets',
    icon_image:
      'https://masaha-staging.s3.amazonaws.com/images/classifieds/category/c2350697-5dfb-44a5-86ee-20b0192cd105.png',
  });
  //adData.append('image', ad.image);
  adData.append('email', 'nero@gmail.com');
  adData.append('phone_number', '928-2323-232');
  adData.append('full_name', 'Nero');

  API.post('/ads/add-an-ad/', adData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(response => console.log('Resporse add an ad', response.data));
};
