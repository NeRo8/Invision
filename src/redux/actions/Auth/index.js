const USERS = 'https://staging.masaha.app/api/v1/users';

export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
export const SET_LOADING = 'SET_AUTH_LOADING';
export const SET_ERROR = 'SET_AUTH_ERROR';
export const REFRESH_TOKEN = 'REFRESH_AUTH_TOKEN';

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

const setToken = token => ({
  type: REFRESH_TOKEN,
  payload: token,
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

export const refreshToken = oldToken => dispatch => {
  fetch(`${USERS}/refresh-token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: oldToken,
    }),
  })
    .then(response => response.json())
    .then(responseJson => dispatch(setToken(responseJson.access)))
    .then(error => dispatch(setError(error)));
};
