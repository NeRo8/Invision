import * as types from './types';

import ApiServices from '../../../api';

const setCategories = data => ({
  type: types.SET_CATEGORIES,
  payload: data,
});

export const getCategories = () => dispatch => {
  ApiServices.get('/ads/categories/').then(response =>
    dispatch(setCategories(response.data)),
  );
};
