import * as types from './types';

import ApiServices from '../../../api';

const setCategories = data => ({
  type: types.SET_CATEGORIES,
  payload: data,
});

export const setReducerValue = (name, value) => ({
  type: types.SET_VALUE,
  name,
  value,
});

export const getCategories = () => dispatch => {
  ApiServices.get('/ads/categories/').then(response =>
    dispatch(setCategories(response.data)),
  );
};
