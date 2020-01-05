import {
  SET_PROFILE,
  SET_ERROR,
  SET_LOADING,
  SET_PROFILE_ADS,
  SET_NOTIFICATION_SETTINGS,
} from '../../actions/Users/types';

const initState = {
  user: null,
  ads: null,
  loading: true,
  error: null,
  notifSettings: {
    ad_answer: false,
    news_offer_promotion: false,
  },
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
    case SET_NOTIFICATION_SETTINGS: {
      return {
        ...state,
        notifSettings: action.payload,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
