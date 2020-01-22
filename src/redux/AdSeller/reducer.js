import * as types from './types';

const initState = {
  profile: null,
  ads: null,
  loading: true,
};

const adSellerReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_SELLER_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case types.SET_SELLER_ADS: {
      return {
        ...state,
        ads: action.payload,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default adSellerReducer;
