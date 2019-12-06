import { SIGN_IN, LOGOUT } from '../../actions/Auth';

const initState = {
  user: null,
  authStatus: false,
  loading: false,
  error: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        user: action.payload,
        authStatus: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        authStatus: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
