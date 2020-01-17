import * as types from './types';

const initState = {
  adDetail: {
    user: {
      pk: null,
    },
  },
  loading: true,
};

const adDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_AD_DETAIL: {
      return {
        ...state,
        adDetail: action.payload,
      };
    }
    case types.ADD_AD_TO_FAVORITE: {
      return {
        ...state,
        adDetail: {
          ...state.adDetail,
          is_favorite: !Boolean(state.adDetail.is_favorite),
        },
      };
    }
    case types.SET_AD_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default adDetailReducer;
