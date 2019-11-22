import { SIGN_IN, LOGOUT } from '../actions/authAction';

const initState = {
  profile: null,
  authStatus: false,
  error: null,
};

const signInReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        profile: action.profile,
        authStatus: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        profile: null,
        authStatus: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default signInReducer;
