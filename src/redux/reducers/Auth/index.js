import { SIGN_IN, LOGOUT, REFRESH_TOKEN } from '../../actions/Auth';

import { deleteToken } from '../../../api';

const initState = {
  user: {
    user: null,
    access_token: null,
  },
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
      deleteToken();
      return {
        ...state,
        user: {
          access_token: null,
        },
        authStatus: false,
      };
    }
    case REFRESH_TOKEN: {
      return {
        ...state,
        user: {
          ...state.user,
          access_token: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
