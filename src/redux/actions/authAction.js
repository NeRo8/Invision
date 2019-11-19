export const SIGN_IN = 'SIGN_IN';
export const LOGOUT = 'LOGOUT';

export const signin = (email, password) => ({
  type: SIGN_IN,
  email,
  password,
});

export const logout = () => ({
  type: LOGOUT,
});
