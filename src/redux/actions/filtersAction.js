export const SET_FILTER = 'SET_FILTER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

const DEFAULT_URL = 'https://staging.masaha.app/api/v1/ads/';

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  name,
  value,
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));
  fetch(`${DEFAULT_URL}categories/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setFilter('categories', responseJson.results));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};
