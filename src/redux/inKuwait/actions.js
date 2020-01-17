import API from '../../api';
import * as types from './types';
import { errorAction } from '../Error';

const setCountList = countList => ({
  type: types.SET_COUNT_LIST,
  payload: countList,
});

const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

export const getCountList = () => dispatch => {
  dispatch(setLoading(true));

  API.get('/common/living-in-kuwait/')
    .then(response => {
      dispatch(setCountList(response.data));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(errorAction.setError(error)));
};
