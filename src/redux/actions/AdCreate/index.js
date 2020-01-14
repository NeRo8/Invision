import * as types from './types';

import ApiServices from '../../../api';
import { store } from '../../store';
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
  ApiServices.get('/ads/categories/').then(response =>
    dispatch(setCategories(response.data)),
  );
};

export const createAd = () => dispatch => {
  const { ad } = store.getState().adCreate;
  const adData = new FormData();
  adData.append('title', 'Title');
  adData.append('city', 2);
  adData.append('description', 'Description');
  adData.append('price', '500');
  adData.append('currency', 'usd');
  adData.append('is_seller_private', 'true');
  adData.append('state', 'new');
  adData.append('category', 5);
  adData.append('email', 'dsd@gmail.com');
  adData.append('phone_number', '0998877666');
  adData.append('full_name', 'Asd Asd');
  adData.append('images', {
    name: 'bengal-cat-6.jpg',
    type: 'image/jpeg',
    uri: 'content://media/external/images/media/86',
  });
  // adData.append('title', ad.title);
  // adData.append('description', ad.description);
  // adData.append('price', ad.price);
  // adData.append('currency', 'usd');
  // adData.append('is_seller_private', ad.is_seller_private);
  // adData.append('state', ad.state);
  // adData.append('category', ad.category);
  // adData.append('email', ad.email);
  // adData.append('phone_number', ad.phone_number);
  // adData.append('full_name', ad.full_name);
  console.log(adData);
  ApiServices.post('/ads/add-an-ad/', adData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(response => console.log('Resporse add an ad', response));
};
