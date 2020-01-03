import { SIGN_IN, LOGOUT, SET_LOADING } from '../actions/authAction';

const initState = {
  profile: null,
  authStatus: false,
  error: null,
  loading: true,
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
    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    default: {
      return state;
    }
  }
};

export default signInReducer;
