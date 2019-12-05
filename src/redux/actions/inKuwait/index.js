const IN_KUWAIT_COMMON =
  'https://staging.masaha.app/api/v1/common/living-in-kuwait/';

export const SET_COUNT_LIST = 'SET_COUNT_LIST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

const setCountList = countList => ({
  type: SET_COUNT_LIST,
  payload: countList,
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const getCountList = () => dispatch => {
  dispatch(setLoading(true));
  fetch(`${IN_KUWAIT_COMMON}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCountList(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};
