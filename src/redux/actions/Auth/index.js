const USERS = 'https://staging.masaha.app/api/v1/users';

export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
export const SET_LOADING = 'SET_USER_LOADING';
export const SET_ERROR = 'SET_USER_ERROR';

const setUser = user => ({
  type: SIGN_IN,
  payload: user,
});

const logout = () => ({
  type: LOGOUT,
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const login = (emailIncome, paswordIncome) => dispatch => {
  dispatch(setLoading(true));
  fetch(`${USERS}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailIncome,
      password: paswordIncome,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setUser(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};
