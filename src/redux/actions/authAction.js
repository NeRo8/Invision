import { storeData } from '../../utils/AsyncStorage';

const USERS = 'https://staging.masaha.app/api/v1/users';

export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
export const SET_ERROR = 'SET_ERROR';

const setProfile = profile => ({
  type: SIGN_IN,
  profile,
});

const logout = () => ({
  type: LOGOUT,
});

const setError = error => ({
  type: SET_ERROR,
  error,
});

export const login = (emailIncome, paswordIncome) => dispatch => {
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
      dispatch(setProfile(responseJson));
      storeData('token', responseJson.access_token);
    })
    .catch(error => dispatch(setError(error)));
};
