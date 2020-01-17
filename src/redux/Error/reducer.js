import * as types from './types';

const initState = {
  error: null,
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case types.CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default errorReducer;
