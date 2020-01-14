import { storeData } from '../../utils/AsyncStorage';

const USERS = 'https://staging.masaha.app/api/v1/users';

export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

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

const setLoading = loading => ({
  type: SET_LOADING,
  loading,
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

export const loginWithFacebook = token => dispatch => {
  dispatch(setLoading(true));

  var formData = new FormData();

  formData.append('provider', 'facebook');
  formData.append('access_token', token);
  //formData.append('email', 'null');
  // formData.append('access_token_secret', 'qwe');

  fetch(`${USERS}/social-connect/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.access_token !== null || undefined) {
        dispatch(setProfile(responseJson));
        dispatch(setLoading(false));
      } else {
        dispatch(setError(responseJson));
        dispatch(setLoading(false));
      }
    })
    .catch(error => {
      dispatch(setLoading(false));
      dispatch(setError(error));
    });
};
