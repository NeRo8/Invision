import * as types from './types';

const initState = {
  adDetail: {
    user: {
      pk: null,
    },
  },
  loading: true,
  error: false,
};

const adDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_AD_DETAIL: {
      return {
        ...state,
        adDetail: action.payload,
      };
    }
    case types.SET_AD_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case types.SET_AD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default adDetailReducer;
