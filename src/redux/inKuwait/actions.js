import API from '../../api';
import * as types from './types';

const setCountList = countList => ({
  type: types.SET_COUNT_LIST,
  payload: countList,
});

const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: types.SET_ERROR,
  payload: error,
});

export const getCountList = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/common/living-in-kuwait/')
    .then(response => {
      dispatch(setCountList(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};
