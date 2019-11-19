import { SIGN_IN, LOGOUT } from '../actions/authAction';

const initState = {
  email: 'xxxxxxs',
  password: '',
  auth: false,
};

const signInReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        auth: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        auth: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default signInReducer;
