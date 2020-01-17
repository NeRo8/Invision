import * as types from './types';

import { deleteToken } from '../../api';

const initState = {
  user: {
    user: null,
    refresh_token: null,
    access_token: null,
  },
  authStatus: false,
  loading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SIGN_IN: {
      return {
        ...state,
        user: action.payload,
        authStatus: true,
      };
    }
    case types.LOGOUT: {
      deleteToken();
      return {
        ...state,
        user: {
          access_token: null,
        },
        authStatus: false,
      };
    }
    case types.REFRESH_TOKEN: {
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
