import {
  SET_PROFILE,
  SET_ERROR,
  SET_LOADING,
  SET_PROFILE_ADS,
} from '../../actions/Users/types';

const initState = {
  user: null,
  ads: null,
  loading: true,
  error: null,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_PROFILE_ADS: {
      return {
        ...state,
        ads: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
